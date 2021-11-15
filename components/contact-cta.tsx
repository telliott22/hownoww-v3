import { FunctionComponent } from "react"
import Container from "./container" 

 const ContactCta: FunctionComponent = () => {
    return (
      <div className="bg-blue-50">
        <Container>
            <div className="py-12 lg:py-24 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-blue-600">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                    <a
                        href="mailto:hello@hownoww.com"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        Contact Us
                    </a>
                    </div>
                </div>
            </div>
        </Container>
      </div>
    )
}

export default ContactCta