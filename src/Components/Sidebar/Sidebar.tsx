import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import "./Sidebar.css"
import {Collapse} from "@mui/material";
import { getCurrentUser, getTokenFormat } from "../../utils/helper";
import {IoMdArrowDropright, IoMdArrowDropdown} from "react-icons/io"
import axios from "axios";

export interface SideBarRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
    isSubNav?: boolean,
}

const SideBar = (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sideBar, setSideBar] = useState(false)
    const [ability, setAbility] = useState(null);
    const showSideBar = () => setSideBar(!sideBar);
    const [user, setUser] = useState<any>(null);
    const [subNav, setSubNav] = useState(false);
    useEffect(() => {
        setUser(getCurrentUser())
        if (props.role === "admin") {
            if (!getCurrentUser().isSuperAdmin) {
                axios.get(`/admin/roles/${getCurrentUser().role}`, getTokenFormat())
                  .then((res) => {
                      setAbility(res.data.ability)
                  })
            }
        }
    }, [])

    const onLogOutHandler = () => {
        localStorage.clear();
        navigate('/')
    }

    const classes = (path: string) => {
        if (path === location.pathname) {
            return 'nav_active'
        }
        return ''
    }


    const getNavMenu = () => {
        if (user) {
            if (props.role === "customer") {
                return props.sideBarItems.map((item: any , index: React.Key | null | undefined) => {
                    return  (
                        <li key={index} className={`${classes(item.path!)}`}>
                            <div>
                                <Link to={item.path!}>
                                    { item.icon }
                                    <span>{ item.title }</span>
                                </Link>
                            </div>
                        </li>
                    )
                })
            } else {
                return props.sideBarItems.map((item: any , index: React.Key | null | undefined) => {
                    if (user.isSuperAdmin) {
                        if (!item.isSubNav && item.path) {
                            return  (
                                <li key={index} className={`${classes(item.path)}`}>
                                    <div>
                                        <Link to={item.path}>
                                            { item.icon }
                                            <span>{ item.title }</span>
                                        </Link>
                                    </div>
                                </li>
                            )
                        } else {
                            return (
                                <React.Fragment>
                                    <li key={index} onClick={() => setSubNav(!subNav)}>
                                        <div>
                                            <Link to={'#'}>
                                                { item.icon }
                                                <span>{ item.title }</span>
                                                {
                                                    !subNav ?
                                                        <IoMdArrowDropright className={sideBar ? '' : 'subNav'}/>
                                                        : <IoMdArrowDropdown className={sideBar ? '' : 'subNav'}/>
                                                }
                                            </Link>
                                        </div>
                                    </li>
                                    {
                                        item.subNav ?
                                            <Collapse in={subNav}>
                                                <React.Fragment>
                                                    {
                                                        item.subNav.map((subItem: {path: string, title: string}, index: number) => (
                                                            <li className={`${classes(subItem.path)} ml-4`} key={index}>
                                                                <div>
                                                                    <Link to={subItem.path}>
                                                                <span style={{
                                                                    fontSize: '14px'
                                                                }}>{ subItem.title }</span>
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </React.Fragment>
                                            </Collapse>
                                            : null
                                    }
                                </React.Fragment>
                            )
                        }
                    }
                    else if (!user.isSuperAdmin && ability) {
                        const abilityKey = Object.getOwnPropertyNames(ability);
                        if (abilityKey.includes(item.ability) && ability[item.ability]) {
                            return (
                                <li key={index} className={`${classes(item.path!)}`}>
                                    <div>
                                        <Link to={item.path!}>
                                            { item.icon }
                                            <span>{ item.title }</span>
                                        </Link>
                                    </div>
                                </li>
                            )
                        }
                    }

                })
            }
        }
    }

    return (
      <div className={sideBar ? 'sidebar active' : 'sidebar'}>
          <div className={'logo_content'}>
              <div className={'profile'}>
                  <p className={'mb-0'}>LOGO</p>
              </div>
              <FaIcons.FaBars className={'fa-bars'} onClick={showSideBar} />
          </div>
          <ul className="nav_list p-0">
              { getNavMenu() }
              <li className="logout_btn" onClick={onLogOutHandler}>
                  <Link to={'#'}>
                      <FiIcons.FiLogOut />
                      <span>Logout</span>
                  </Link>
              </li>
          </ul>
      </div>
    );
};
export default SideBar;
