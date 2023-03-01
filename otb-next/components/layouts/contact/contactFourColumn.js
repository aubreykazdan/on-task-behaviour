export default function ContactFourColumn({}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Send Love Letters...
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">By Email</h3>
            <p className="mt-2 text-base">
              For General Inquiries:
              <a
                href="mailto:hello@ontaskbehaviour.com"
                className="block underline text-blue-800"
              >
                hello@ontaskbehaviour.com
              </a>
            </p>
            <p className="mt-2 text-base">
              For Website-Specific Inquiries:
              <a
                href="mailto:web@ontaskbehaviour.com"
                className="block underline text-blue-800"
              >
                web@ontaskbehaviour.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              By Carrier Pigeon (or regular mail)
            </h3>
            <p className="mt-2 text-base">
              <span className="font-bold">CANADA:</span>
              <span className="block">1124 College St</span>
              <span className="block">Toronto ON M6H 1B6</span>
            </p>
            <p className="mt-2 text-base">
              <span className="font-bold">US:</span>
              <span className="block">PO Box 1153</span>
              <span className="block">Ogdensburg NY 13669</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">In Person</h3>
            <p className="mt-2 text-base">
              <span className="font-bold">CANADA:</span>
              <span className="block">1124 College St</span>
              <span className="block">Toronto ON M6H 1B6</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">On Social Media</h3>
            <ul className="mt-2 text-base space-y-2">
              <li>
                <a
                  className="text-blue-800 underline"
                  href="https://www.tiktok.com/@ontaskbehaviour"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  className="text-blue-800 underline"
                  href="https://www.instagram.com/ontaskbehaviour/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
