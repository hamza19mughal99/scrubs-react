import React from 'react';
import "./TermsCondition.scss";
import {Container} from "react-bootstrap";
import Banner from "../../../Components/Banner/Banner";

const TermsCondition = () => {
    return (
        <React.Fragment>

        <Banner heading={'Terms and Conditions'} cssClass={'policy_bg'} />

        <Container className={'terms_condition'}>
            <h4>Terms & Conditions for Ecommerce Stores</h4>
            <p>A Terms and Conditions agreement (T&Cs) is the agreement that includes the terms,
                the rules and the guidelines of acceptable behavior and other useful
                sections to which users must agree in order to use or access your website and mobile app.</p>
            <br />
            <h4>Ecommerce Stores</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H. Rackham.</p>

            <hr />
            <h4>What is Lorem Ipsum?</h4>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                I will give you a complete account of the system, and expound the actual teachings of the great explorer of
                the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
                consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can
                procure him some great pleasure.
            </p>
            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure
                \rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>

        </Container>
        </React.Fragment>
    );
};

export default TermsCondition;