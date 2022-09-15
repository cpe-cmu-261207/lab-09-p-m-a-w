import { IconBrandFacebook } from "@tabler/icons";
import { Template } from "../components/Template";

export default function Contact() {
    return <Template>
        <div>
            <p className="text-primary">
                <IconBrandFacebook /><a href="https://www.facebook.com/function.username" rel="noreferrer">Facebook</a>
            </p>
        </div>
    </Template>
}