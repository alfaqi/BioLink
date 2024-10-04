'use client'
export default function HomePage() {
  return (
    <div className="landing-page">
      <section className="bg-orange text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to BioLink</h1>
        <p className="text-lg mt-4">
          Join the revolution in decentralized healthcare research. Secure, transparent, and participant-driven.
        </p>
        <button 
          className="mt-6 px-8 py-3 bg-turquoise text-black rounded-md font-semibold hover:bg-white hover:text-orange transition"
          onClick={() => window.location.href = '/participate'}
        >
          Get Started
        </button>
      </section>

      <section className="features py-20">
        <h2 className="text-4xl font-bold text-center text-orange">Why BioLink?</h2>
        <div className="feature-list mt-8 flex justify-around">
          <div className="feature bg-white border-2 border-turquoise p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange">Decentralized Participation</h3>
            <p className="text-gray-700 mt-2">Securely participate in research studies from anywhere.</p>
          </div>
          <div className="feature bg-white border-2 border-turquoise p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange">Earn Rewards</h3>
            <p className="text-gray-700 mt-2">Receive NFTs and token rewards for your contributions.</p>
          </div>
          <div className="feature bg-white border-2 border-turquoise p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange">Data Privacy</h3>
            <p className="text-gray-700 mt-2">Your data is stored securely on IPFS, ensuring privacy.</p>
          </div>
        </div>
      </section>

      <section className="cta bg-turquoise text-center py-16">
        <h2 className="text-3xl font-bold text-white">Ready to contribute to healthcare research?</h2>
        <button 
          className="mt-6 px-8 py-3 bg-orange text-white rounded-md font-semibold hover:bg-white hover:text-orange transition"
          onClick={() => window.location.href = '/participate'}
        >
          Participate Now
        </button>
      </section>
    </div>
  );
}
