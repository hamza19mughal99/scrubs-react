import React from 'react';
import Banner from "../../../Components/Banner/Banner";
import {Container} from "react-bootstrap";
import "./Policy.scss";

const Policy = () => {
    return (
        <React.Fragment>
            <Banner heading={'Return Policy'} cssClass={'policy_bg'} />

            <Container className={'return_policy'}>
                <h4>Last updated: <span> April 01, 2021 </span></h4>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
                    information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                    collection and use of information in accordance with this Privacy Policy.
                    Interpretation and Definitions</p>
                <h4>Interpretation</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
                    in their exact original form,
                    accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
                <hr className={'divider my-4'} />
                <h4>DEFINITIONS</h4>
                <p>For the purposes of this Privacy Policy:</p>
                <h4>Account</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h4>Company</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h4>Cookies</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h4>Country</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <hr className={'divider my-4'} />
                <h4>Third-party Social Media Service</h4>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by H. Rackham.</p>
            </Container>
        </React.Fragment>
    );
};
export default Policy;