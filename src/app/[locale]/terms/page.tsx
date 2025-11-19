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
          Unione - Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Important Notice
            </h2>
            <p className="mb-4 leading-relaxed">
              In the event of a dispute, this Agreement will be resolved in accordance with the applicable laws. Please read this Agreement carefully.
            </p>
            <p className="mb-4 leading-relaxed">
              These Terms of Service (the &quot;Terms&quot;) describe the terms and conditions under which UnioneCore Co., Ltd. (the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) provides access to and allows you to use the Unione mobile wallet application (&quot;Unione&quot; or the &quot;Product&quot;). This Agreement affects your use of the Product, so you should read it carefully. By accessing or using the Product, you acknowledge that you have read, understood, and agreed to be bound by this Agreement in its entirety. If you do not agree to this Agreement, you are not authorized to access or use our Product and must not use it.
            </p>
            <p className="mb-4 leading-relaxed">
              To access or use our Product, you must be able to enter into a legally binding agreement with us. Accordingly, you represent that you are at least the age of majority in your jurisdiction and that you have the full right, power, and authority to enter into and comply with these Terms on your own behalf and, if applicable, on behalf of any company or entity that you may access or use the Product for. If you are entering into this Agreement on behalf of an entity, you represent to us that you have the legal authority to bind such entity.
            </p>
            <p className="mb-4 leading-relaxed">
              You also confirm that you are not located in, and are not a resident of, any country or territory that is subject to sanctions, and that you are not listed on any sanctions or restricted party lists.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              1. Service Description
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.1 Unione
              </h3>
              <p className="mb-4 leading-relaxed">
                Unione is a mobile application designed around community participation, enabling users to experience various digital services through community engagement, social activities, and the use of in-app features.
              </p>
              <p className="mb-2 leading-relaxed">Its main features include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Creation and management of user wallets</strong> - Users can create their own digital wallets and manage their assets directly.</li>
                <li><strong>Social activity-based features</strong> - Users can utilize the service with a focus on interactions between users, including profile creation, community participation, inviting friends, and recording activities.</li>
                <li><strong>In-app activity records and management</strong> - Users can view their participation activities, interactions within the community, and social activity-related information within the app.</li>
                <li><strong>Non-custodial wallet structure</strong> - Private keys and recovery phrases are stored and managed solely by the user, and the Company does not store or restore any private keys.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.2 Usernames and Profiles
              </h3>
              <p className="leading-relaxed">
                When using the Product, you may claim a subdomain that serves as a username linked to your wallet address. Your username and profile information, biometric information, profile picture, transaction history, and other profile details may be displayed publicly. When choosing a username, you must ensure that it does not infringe on another person&apos;s intellectual property rights or impersonate any individual or organization in a way that could cause confusion. The purchase, sale, or rental of usernames or profiles is prohibited. If you change your username, you may no longer be able to use your previous username. We reserve the right, at our sole discretion and without prior notice, to revoke access to a username. This may occur if you violate these provisions, violate applicable laws, or engage in behavior that is harmful to our services. Usernames that conflict with our intent to promote positive connections or that are offensive may also be revoked. We may also delete or reassign usernames to comply with legal obligations or court orders.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.3 Third-Party Services and Content
              </h3>
              <p className="mb-4 leading-relaxed">
                Our Product may include integrations with, links to, or other means of accessing third-party services, websites, technologies, content, or resources (collectively, &quot;Third-Party Services&quot;). If you use any Third-Party Services, you may be subject to additional terms, privacy policies, or agreements imposed by the relevant third party. You may also be required to authenticate or create a separate account via the provider&apos;s platform to access such Third-Party Services. Any costs or fees arising from the use of Third-Party Services are your sole responsibility and not the responsibility of the Company.
              </p>
              <p className="leading-relaxed">
                The inclusion or integration of Third-Party Services in our Product is provided for your convenience and does not constitute any warranty, endorsement, or guarantee of such services. Any interactions, transactions, or dealings you have with third parties while using the Product are solely between you and the relevant third parties. The Company disclaims all responsibility and liability for any damages or losses arising from or related to your use of or reliance on Third-Party Services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              2. Modifications to the Agreement and the Product
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                2.1 Changes to the Agreement
              </h3>
              <p className="leading-relaxed">
                We reserve the right, in our sole discretion, to update or modify this Agreement from time to time. In the event of any material changes, we will notify you by updating the date at the top of the Agreement or by other appropriate means. All changes take effect immediately upon posting. Your continued access to or use of the Product after changes are posted constitutes your acceptance of the updated Agreement. If you do not agree with the changes, you must immediately stop accessing or using the Product.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                2.2 Changes to the Product
              </h3>
              <p className="leading-relaxed">
                We reserve the following rights, which do not constitute obligations: (a) the right to modify, replace, remove, or add features to the Product, with or without prior notice; (b) the right to review, edit, filter, disable, remove, or delete any content or information in the Product.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              3. User Responsibilities
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.1 Use of the Product
              </h3>
              <p className="leading-relaxed">
                You are solely responsible for all activities that occur in connection with your use of the Product, whether or not such activities are authorized by you and whether they are performed by you, your employees, or any third party. Neither we nor our affiliates will be responsible for any unauthorized access to the Product or your account, including access resulting from fraud, phishing, or other criminal activities by third parties. You are responsible for ensuring that your use of the Product complies with all applicable laws.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.2 Security and Backups
              </h3>
              <p className="mb-4 leading-relaxed">
                You are solely responsible for taking appropriate measures to properly use the Product and to protect, safeguard, and back up your account. This includes implementing appropriate security practices, such as using encryption where applicable. If you are unable or unwilling to take responsibility for your account security, you should not use the Product. Your responsibilities under this Agreement also include promptly installing or implementing any software updates or upgrades made available for the Product and securely managing any passwords or secret recovery phrases associated with your use of the Product.
              </p>
              <p className="mb-4 leading-relaxed">
                You acknowledge that certain methods of storing secret recovery phrases-such as saving them as digital files on personal devices or in cloud storage-may increase the risk of compromise. You further acknowledge that you must not share your password or secret recovery phrase with us or with any third party. We are not responsible for any consequences arising from your intentional or unintentional sharing of such credentials. For the avoidance of doubt, we are not liable for any theft of secret recovery phrases, including theft resulting from unauthorized access to your personal devices or cloud storage provider&apos;s systems.
              </p>
              <p className="leading-relaxed">
                You are fully responsible for the use and security of such keys. We bear no responsibility for any consequences arising from your sharing of your keys or secret recovery phrase with others, whether intentionally or unintentionally.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.3 Prohibited Activities
              </h3>
              <p className="mb-4 leading-relaxed">
                You agree not to engage in, or attempt to engage in, any of the following prohibited activities when accessing or using the interface:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Cyberattacks:</strong> Actions intended to disrupt or compromise the security, integrity, or functionality of computers, servers, networks, personal devices, or other IT systems, including but not limited to the distribution of viruses or denial-of-service attacks.</li>
                <li><strong>Fraud and Misrepresentation:</strong> Engaging in fraudulent conduct, such as providing false, inaccurate, or misleading information to unlawfully obtain property belonging to others.</li>
                <li><strong>Intellectual Property Infringement:</strong> Infringing or violating any copyright, trademark, service mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under applicable law.</li>
                <li><strong>Sale of Stolen Property:</strong> Selling or transferring stolen goods, fraudulently obtained goods, unauthorized goods, or other illegally acquired items.</li>
                <li><strong>Data Mining or Scraping:</strong> Using data mining, robots, scraping, or similar technologies to extract content or information from the Product.</li>
                <li><strong>Other Illegal Activities:</strong> Engaging in any activity that violates applicable laws, rules, or regulations of the United States or any other relevant jurisdiction, including conduct prohibited by U.S. regulatory authorities.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.4 Transactions
              </h3>
              <p className="leading-relaxed">
                You acknowledge and agree that: (a) any transaction executed through our Product is considered unsolicited and is initiated solely by you; (b) we do not provide investment advice with respect to any transaction; and (c) we do not conduct any suitability assessments in relation to transactions you submit.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.5 Non-Custodial Nature and No Fiduciary Duty
              </h3>
              <p className="mb-4 leading-relaxed">
                Our Product operates as a fully non-custodial application, and we do not have custody, ownership, or control over any digital assets. This also means that you are solely responsible for managing and safeguarding the cryptographic private keys associated with your digital asset wallets. You must not share your wallet credentials with anyone. We disclaim any and all responsibility and liability related to your use of your wallet and do not guarantee compatibility or functionality with any particular wallet. You are solely responsible for managing your wallet, including in situations where your wallet may be compromised, and we are not liable for any acts or omissions on your part.
              </p>
              <p className="leading-relaxed">
                This Agreement does not create any fiduciary duty on our part. To the maximum extent permitted by law, you agree that we do not owe any fiduciary duties or responsibilities to you or any other party. To the extent that any such duties or responsibilities may be implied by law or equity, they are hereby expressly disclaimed, waived, and eliminated to the fullest extent possible. You further acknowledge and agree that our only obligations to you are those expressly set out in this Agreement.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.6 Release of Claims
              </h3>
              <p className="leading-relaxed">
                You acknowledge the risks that may arise in the course of using the Product (including technical errors and issues with Third-Party Services) and agree that, to the extent permitted by law, the Company shall not be liable for such matters.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              4. Copyright
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                4.1 IP Rights
              </h3>
              <p className="mb-4 leading-relaxed">
                We own all intellectual property rights and other rights in and to the Product and its content, including but not limited to software, text, images, trademarks, service marks, copyrights, patents, designs, and the overall &quot;look and feel.&quot; These intellectual property rights are provided subject to applicable copyright licenses and trademark guidelines. Subject to your compliance with this Agreement, we grant you a limited, revocable, non-exclusive, non-sublicensable, and non-transferable license to access and use our Product in accordance with these Terms.
              </p>
              <p className="leading-relaxed">
                You agree not to use, modify, distribute, alter, reverse engineer, decompile, or disassemble the Product for any purpose other than as expressly permitted in this Agreement. Except as expressly provided herein, no rights (including intellectual property rights) in or to the Product are granted to you.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                4.2 Third-Party Resources and Promotions
              </h3>
              <p className="leading-relaxed">
                Our Product may include references or links to third-party resources, such as information, materials, products, or services that are not owned or controlled by us, and these are the sole responsibility of their respective providers. Third parties may also offer promotions related to your use of the Product. We do not approve, monitor, endorse, guarantee, or assume any responsibility for such resources or promotions. Your access to these resources or participation in such promotions is at your own risk, and you acknowledge that this Agreement does not govern your interactions or relationships with any third parties. You expressly release us from any and all liability arising from your use of such resources or participation in such promotions.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                4.3 Legal Requests
              </h3>
              <p className="leading-relaxed">
                We reserve the right to cooperate with any law enforcement agency, court, governmental authority, or third party in connection with any request or directive to disclose information or content that you provide.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              5. Disclaimers; Risks
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.1 No Warranties
              </h3>
              <p className="leading-relaxed">
                Our Product is provided &quot;as is&quot; and &quot;as available.&quot; To the maximum extent permitted by law, we disclaim all representations and warranties of any kind, whether express, implied, or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. You acknowledge and agree that your use of the Product is at your sole risk. We do not warrant that access to the Product will be continuous, uninterrupted, timely, or secure. We do not warrant that any information provided through the Product will be accurate, reliable, complete, current, or free of errors, defects, viruses, or other harmful components. We do not warrant, endorse, or assume responsibility for any advice, information, or statements made in connection with the Product, nor for any advertising, offers, or statements of third parties regarding the Product.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.2 Risk Notice
              </h3>
              <p className="leading-relaxed">
                Due to the technological and environmental characteristics of blockchain networks and digital assets, there may be risks such as volatility, network congestion, and transaction delays. You must understand and accept these risk factors when using the Service.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.3 External Sales and Activities
              </h3>
              <p className="leading-relaxed">
                The Company only provides the platform and application services. The Company has no connection whatsoever with any external sales teams, marketing groups, third-party promotional activities, investment solicitations, or product sales conducted outside of the application. The Company shall not be liable for any agreements, damages, or disputes arising from such external activities.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.4 Limitation of the Company&apos;s Responsibility
              </h3>
              <p className="mb-4 leading-relaxed">
                The Company shall not be liable for damages arising from the following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Security breaches of the user&apos;s device</li>
                <li>Loss of recovery phrases or private keys</li>
                <li>Errors or delays in blockchain networks</li>
                <li>Use of Third-Party Services</li>
                <li>Unforeseeable system failures</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              6. Indemnification
            </h2>
            <p className="mb-4 leading-relaxed">
              You agree to indemnify, defend, and hold harmless the Company and each of its officers, directors, employees, contractors, agents, service providers, licensors, and representatives (collectively, the &quot;Company Parties&quot;) from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your access to or use of the Product; (b) your violation of any term or condition of this Agreement, any third-party rights, or any applicable laws, rules, or regulations; or (c) access to or use of the Product by any other party using a device or account owned or controlled by you, or under your assistance.
            </p>
            <p className="leading-relaxed">
              You also agree to indemnify the Company Parties for any disputes between you and (i) other users of the Product or (ii) your own customers or users. We will notify you of any such claim, suit, or proceeding. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification under this section, and you agree to cooperate with any reasonable requests in assisting our defense of such matter. You may not settle or compromise any claim involving any Company Party without our prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              7. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed">
              In no event shall we be liable to you for any indirect, punitive, incidental, special, consequential, or exemplary damages, including, without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses arising out of or relating to (i) your access to or use of, or inability to access or use, the Product; or (ii) any unauthorized access to or use of the Product or any information contained therein, including as a result of hacking, tampering, or other unauthorized access or use. This applies whether the claim is based on contract, tort, negligence, strict liability, or otherwise, and even if an authorized representative of the Company has been advised of or knew or should have known of the possibility of such damages.
            </p>
            <p className="mb-4 leading-relaxed">
              We are not liable for: (A) any errors, mistakes, or inaccuracies in content; (B) any personal injury or property damage resulting from access to or use of the Product; (C) any unauthorized access to or use of our secure servers or databases, or any use of or access to information or data stored therein; (D) any interruption or cessation of functions related to the Product; (E) any bugs, viruses, trojan horses, or similar issues that may be transmitted to or through the Product; (F) any loss or damage arising from the use of content provided through the Product; (G) any errors or omissions in any content provided through the Product; (H) any defamatory, offensive, or illegal conduct of any third party.
            </p>
            <p className="mb-4 leading-relaxed">
              We are not liable to you or any third party for any claims or damages arising from payments or transactions made using the Product, or any other payments or transactions made through the Product. We make no express or implied warranties or representations regarding any linked Third-Party Services, any third parties that own or operate them, the information they contain, the assets or products or services accessible through them, or their suitability, privacy, or security. You acknowledge that you are solely responsible for, and assume all risks arising from, your use of any Third-Party Services, websites, applications, or resources. In no event shall we be liable for any damages related to software, products, services, or information provided by third parties and accessed through our Product.
            </p>
            <p className="leading-relaxed">
              The above disclaimers do not apply where they are legally prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              8. Dispute Resolution
            </h2>
            <p className="leading-relaxed">
              Disputes shall be resolved in accordance with the applicable laws of the user&apos;s jurisdiction. Users shall make good-faith efforts to resolve issues through mutual consultation before pursuing other remedies.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
