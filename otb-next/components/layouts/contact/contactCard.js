import Container from "@/components/container.js";

export default function ContactCard({}) {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          <div>
            <h2>Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            <div className="rounded-2xl bg-gray-100 p-10">
              <h3 className="text-lg font-semibold">Collaborate</h3>
              <dl className="mt-3 text-base">
                <div>
                  <dt className="sr-only">General Inquiries Email</dt>
                  <dd>
                    <p className="block">For General Inquiries</p>
                    <a
                      className="accent-link"
                      href="mailto:hello@ontaskbehaviour.com"
                    >
                      hello@ontaskbehaviour.com
                    </a>
                  </dd>
                </div>
                {/* <div className="mt-3">
                  <dt className="sr-only">Website-Specific Email</dt>
                  <dd>
                    <p className="block">For Website-Specific Inquiries</p>
                    <a
                      className="accent-link"
                      href="mailto:hello@ontaskbehaviour.com"
                    >
                      hello@ontaskbehaviour.com
                    </a>
                  </dd>
                </div> */}
              </dl>
            </div>
            <div className="rounded-2xl bg-gray-100 p-10">
              <h3 className="text-lg font-semibold">Send Mail</h3>
              <dl className="mt-3 text-base">
                <div>
                  <dt className="sr-only">Location in Canada</dt>
                  <dd>
                    <p className="block font-semibold">Canada:</p>
                    <p>
                      1124 College St.{" "}
                      <span className="block">Toronto, ON M6H 1B6</span>
                    </p>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Location in United States</dt>
                  <dd>
                    <p className="block font-semibold">US:</p>
                    <p>
                      PO Box 1153{" "}
                      <span className="block">Ogdensburg, NY 13669</span>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl bg-gray-100 p-10">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <dl className="mt-3 text-base">
                <div>
                  <dt className="sr-only">TikTok</dt>
                  <dd>
                    <a
                      className="accent-link"
                      href="https://www.tiktok.com/@ontaskbehaviour"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TikTok
                    </a>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Instagram</dt>
                  <dd>
                    <a
                      className="accent-link"
                      href="https://www.instagram.com/ontaskbehaviour/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl bg-gray-100 p-10">
              <h3 className="text-lg font-semibold">Say Hello (In Person)</h3>
              <dl className="mt-3 text-base">
                <div>
                  <dt className="sr-only">Location in Canada</dt>
                  <dd>
                    <p className="block font-semibold">Canada:</p>
                    <p>
                      1124 College St.{" "}
                      <span className="block">Toronto, ON M6H 1B6</span>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
