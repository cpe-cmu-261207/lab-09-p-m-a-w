import { Template } from "../components/Template";

export default function Contact() {
    return <Template>
        <img
            className="rounded-circle mb-2"
            width="100"
            height="100"
            src="images/profile.jpg"
        />
        <h1>Perapol Pamoonchaer</h1>
        <p>Working hours: 9AM-3PM Mon-Sat GMT+07</p>
        <p>
            <i className="fa-brands fa-facebook"></i>
            <a href="https://bit.ly/3OwR2qZ" rel="noreferrer" target="_blank">
                Perapol Pamoonchaer
            </a>
        </p>
        <p>
            <i className="fa-solid fa-at"></i>
            <a href="mailto:perapol_p@cmu.ac.th" rel="noreferrer" target="_blank">
                perapol_p@cmu.ac.th
            </a>
        </p>
        <p>Please contact me using E-Mail, I will reply you ASAP!</p>
    </Template>
}