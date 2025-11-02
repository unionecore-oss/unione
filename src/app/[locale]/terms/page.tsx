import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - UNIONE',
  description: 'Terms of Service for Unione mobile wallet application',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Important Notice
            </h2>
            <p className="mb-4 leading-relaxed">
              This Agreement is subject to binding arbitration and a waiver of class-action rights as set forth in Chapter 8. Please read this Agreement carefully.
            </p>
            <p className="mb-4 leading-relaxed">
              These Terms of Service (the "Agreement") describe the terms on which you may access and use the "Unione" mobile wallet application provided by Unione Core Co., Ltd. (the "Company," "we," "us," or "our").
            </p>
            <p className="mb-4 leading-relaxed">
              This Agreement affects your use of the Products, so please read it carefully. By accessing or using the Products, you acknowledge that you have read, understood, and agree to be bound by this Agreement in its entirety. If you do not agree, you are not authorized to access or use our Products, and you must not use them.
            </p>
            <p className="mb-4 leading-relaxed">
              To access or use the Products, you must be able to enter into a legally binding contract with us. Accordingly, you represent that you are at least the age of majority in your jurisdiction and that you have the full right, power, and authority to enter into and comply with this Agreement for yourself and for any company or entity that you access or use the Products on behalf of. If you enter into this Agreement on behalf of an entity, you represent to us that you have legal authority to bind that entity.
            </p>
            <p className="mb-4 leading-relaxed">
              You further represent that you are not listed on any prohibited or restricted party list, including (without limitation) lists maintained by the United Nations Security Council, the Government of the United States, the European Union or its member states, the United Kingdom, or any other relevant governmental authority, and that you are not located in a country subject to comprehensive sanctions administered by the United States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              1. Products
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.1 Unione: Mobile Wallet Application
              </h3>
              <p className="leading-relaxed">
                Unione enables users to: (a) securely store digital assets; (b) manage and view addresses and accounts on digital asset networks and broadcast transactions; (c) participate in token swaps, liquidity provisioning, and related transactions; and (d) stake tokens in smart contracts to earn additional rewards.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.2 Subdomains
              </h3>
              <p className="leading-relaxed">
                When using the Product, you may claim a subdomain used as a username linked to your wallet address. Usernames and profile information—including, without limitation, your username, profile details, biometrics, profile image, and transaction history—may be displayed publicly. When choosing a username, you must not infringe others' intellectual property or impersonate any person or organization. Buying, selling, or leasing usernames is prohibited. Username squatting is not permitted and usernames may be reassigned. If you change your username, the previous username may become unavailable. We reserve the right, in our discretion and without prior notice, to revoke access to a username if you violate these provisions, violate applicable law, or engage in conduct harmful to our services. Usernames that are inconsistent with our intent to foster positive associations, or that are offensive, may be revoked. We may also remove or reassign a username to comply with legal obligations or court orders.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.3 Third-Party Services and Content
              </h3>
              <p className="mb-4 leading-relaxed">
                Our Products may include integrations with, links to, or other means of accessing third-party services, websites, technologies, content, or resources (collectively, "Third-Party Services"). Your use of Third-Party Services may be subject to additional terms, privacy policies, or agreements set by the relevant third parties. You may be required to authenticate or create a separate account through those providers' platforms. You are solely responsible for any costs or fees associated with Third-Party Services.
              </p>
              <p className="leading-relaxed">
                Inclusion or integration of Third-Party Services is provided for your convenience and does not constitute any warranty, endorsement, or guarantee. Any interactions, transactions, or dealings you enter into with third parties while using the Products are solely between you and those third parties. The Company disclaims all responsibility and liability for any damages or losses arising from or related to your use of, or reliance on, any Third-Party Services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              2. Modifications to the Agreement and the Products
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                2.1 Changes to the Agreement
              </h3>
              <p className="leading-relaxed">
                We may update or modify this Agreement from time to time at our discretion. For material changes, we will update the date at the top of this Agreement. All changes are effective upon posting. Your continued access to or use of the Products after changes are posted constitutes your acceptance of the updated Agreement. If you do not agree to the changes, you must immediately cease accessing or using the Products.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                2.2 Changes to the Products
              </h3>
              <p className="leading-relaxed">
                We reserve the right, but not the obligation, to: (a) modify, replace, remove, or add to the Products, with or without prior notice; and (b) review, edit, filter, disable, remove, or delete any content or information in the Products.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
