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
              This Agreement is subject to binding arbitration and a waiver of class action rights as specified in Chapter 8. Please read the Agreement carefully.
            </p>
            <p className="mb-4 leading-relaxed">
              These Terms of Service (the &quot;Terms&quot;) describe the terms and conditions for accessing and using the mobile wallet application &apos;Unione&apos; provided by Unione Core Co., Ltd. (the &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            <p className="mb-4 leading-relaxed">
              This Agreement affects your use of the Product and should be read carefully. Accessing or using the Product means you have read, understood, and agreed to this Agreement in its entirety. If you do not agree to this Agreement, you are not authorized to access or use our Product and must not use it.
            </p>
            <p className="mb-4 leading-relaxed">
              To access or use our Product, you must be able to form a legally binding contract with us. Therefore, you represent that you are at least the minimum age required in your jurisdiction and possess full right, power, and authority to enter into and comply with the terms of this Agreement on behalf of yourself and any company or entity accessing or using the product. If you are entering into this Agreement on behalf of an entity, you represent to us that you have the legal authority to bind that entity.
            </p>
            <p className="mb-4 leading-relaxed">
              You represent to us that you are not listed on any prohibited or restricted party list, including but not limited to those maintained by the United Nations Security Council, the U.S. Government, the European Union or its member states, the United Kingdom, or other relevant governmental agencies, and that you are not located in a country subject to any comprehensive sanctions program enforced by the United States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              1. Product
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.1 Unione; Mobile Wallet Application
              </h3>
              <p className="leading-relaxed">
                Unione enables you to: (a) securely store digital assets; (b) manage and view addresses and accounts within the digital asset network and broadcast transactions; (c) participate in token swaps, liquidity pools, and related transactions; and (d) hold tokens as equity in contracts to earn additional rewards.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.2 Subdomains
              </h3>
              <p className="leading-relaxed">
                Using this product allows you to claim a subdomain that serves as your username linked to your wallet address. Your username and profile information, including biometric data, profile picture, and transaction history, will be publicly displayed. When selecting a username, you must ensure it does not infringe on another person&apos;s intellectual property rights or mislead others by impersonating another individual or organization. The purchase, sale, or rental of usernames or profiles is prohibited. Similarly, username squatting is not permitted, and usernames may be reassigned. Changing your username may result in the previous username becoming unavailable. We reserve the right to terminate access to a username at our sole discretion without prior notice. This may occur if you violate these terms, violate applicable laws, or engage in conduct harmful to our services. Usernames that are offensive or contrary to our intent to foster positive connections may also be terminated. We may also delete or reassign usernames to comply with legal obligations or court orders.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                1.3 Third-Party Services and Content
              </h3>
              <p className="mb-4 leading-relaxed">
                Our products may include integrations, links, or other means of accessing third-party services, websites, technologies, content, or resources (collectively, &quot;Third-Party Services&quot;). When using Third-Party Services, you may be subject to additional terms, privacy policies, or agreements established by the relevant third party. You may also need to authenticate or create a separate account to access Third-Party Services through the provider&apos;s platform. Any costs or fees associated with using Third-Party Services are solely your responsibility and not the Company&apos;s.
              </p>
              <p className="leading-relaxed">
                The inclusion or integration of Third-Party Services in our products is provided for your convenience only and does not constitute an endorsement, recommendation, or warranty of such services. Any interactions, transactions, or dealings you enter into with third parties while using our products are solely between you and such third parties. The Company disclaims all liability and responsibility for any damages or losses arising from or related to the use of or reliance on Third-Party Services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              2. Contract and Product Modifications
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                2.1 Contract Modifications
              </h3>
              <p className="leading-relaxed">
                We reserve the right to update or modify the Contract at any time at our sole discretion. We will notify you of any material changes by updating the date at the top of the Contract. All changes take effect immediately upon posting. Your continued access to or use of our Products after any modifications are posted constitutes your acceptance of the updated Contract. If you do not agree to the changes, you must immediately cease all access to or use of our Products.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                2.2 Product Modifications
              </h3>
              <p className="leading-relaxed">
                We reserve the following rights, which are not obligations: (a) the right to modify, replace, remove, or add Products, with or without prior notice; (b) the right to review, edit, filter, disable, delete, or remove any content or information within the Products.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              3. Your Responsibilities
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.1 Product Use
              </h3>
              <p className="leading-relaxed">
                You are solely responsible for all activities undertaken in connection with your use of the Products. This includes whether such activities were authorized by you or performed by you, your employees, or third parties. Neither we nor our affiliates shall be liable for any unauthorized access to the Product or your account, including access resulting from fraud, phishing, or other criminal activities performed by third parties. You are responsible for ensuring your use of the Product complies with all applicable laws.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.2 Security and Backup
              </h3>
              <p className="mb-4 leading-relaxed">
                You are solely responsible for using the Product correctly and taking appropriate measures to protect, safeguard, and back up your account. This includes implementing appropriate security practices, such as using encryption where applicable. You must not use the Product if you cannot or do not wish to assume responsibility for account security. Your responsibilities under this Agreement also include promptly installing or implementing any software updates or upgrades available for the Product and securely managing any passwords or secret recovery phrases associated with your use of the Product.
              </p>
              <p className="mb-4 leading-relaxed">
                You acknowledge that certain methods of storing your secret recovery phrase, such as storing it as a digital file on a personal device or in cloud storage, increase the risk of compromise. You also acknowledge that you must not share your password or secret recovery phrase with us or any third party. We are not responsible for any consequences arising from the intentional or unintentional sharing of these credentials. For clarity, we assume no responsibility for the theft of your secret recovery phrase, including theft resulting from unauthorized access to your personal device or a cloud storage provider&apos;s system.
              </p>
              <p className="leading-relaxed">
                You are solely responsible for the use and security of these keys. We assume no responsibility for any consequences arising from your sharing of these keys or secret recovery phrase with others, whether intentional or unintentional.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.3 Prohibited Activities
              </h3>
              <p className="mb-4 leading-relaxed">
                You agree not to engage in or attempt to engage in the following prohibited activities when accessing or using the Interface:
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Cyberattacks:</strong> Actions intended to disrupt or damage the security, integrity, or functionality of computers, servers, networks, personal devices, or other IT systems, including but not limited to distributing viruses or launching denial-of-service attacks.
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Fraud and Misrepresentation:</strong> Engaging in fraudulent acts, such as providing false, inaccurate, or misleading information to unlawfully obtain another person&apos;s property.
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Market Manipulation:</strong> Activities violating laws, rules, or regulations governing the integrity of trading markets, including but not limited to tactics such as &apos;rug pulls&apos;, pumping and dumping, and wash trading.
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Securities and Derivatives Violations:</strong> Violating laws or regulations governing securities or derivatives trading, such as offering unregistered securities offerings or leveraged and margin products to U.S. retail customers.
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Intellectual Property Infringement:</strong> Infringing or violating copyrights, trademarks, service marks, patents, publicity rights, privacy rights, or other proprietary or intellectual property rights under applicable law.
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Sale of Stolen Property:</strong> The sale or transfer of stolen goods, fraudulently obtained goods, goods obtained without authorization, or other goods acquired illegally.
              </p>
              <p className="mb-2 leading-relaxed">
                <strong>Data Mining or Scraping:</strong> Using data mining, robots, scraping, or similar technologies to extract content or information from the Product.
              </p>
              <p className="leading-relaxed">
                <strong>Other Illegal Activities:</strong> Engaging in any activity that violates applicable laws, rules, or regulations of the United States or any other relevant jurisdiction, including actions imposed by U.S. regulatory authorities.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.4 Transactions
              </h3>
              <p className="leading-relaxed">
                You acknowledge and agree that: (a) all transactions executed through our Products are deemed unsolicited and initiated solely by you; (b) we do not provide investment advice in connection with any transaction; and (c) we do not perform suitability assessments for transactions submitted by you.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.5 Non-Custodial and No Fiduciary Duty
              </h3>
              <p className="mb-4 leading-relaxed">
                Our product operates as a fully non-custodial application, meaning we hold no custody, ownership, or control over your digital assets. This also means you are solely responsible for managing and protecting the cryptographic private keys associated with your digital asset wallet. You must not share your wallet credentials or seed phrase with anyone. We disclaim all responsibility and liability for your use of wallets and do not guarantee compatibility or functionality with any specific wallet. Furthermore, you are solely responsible for managing your wallet and we are not liable for any actions or omissions on your part, including instances where your wallet may be compromised.
              </p>
              <p className="leading-relaxed">
                This Agreement does not impose any fiduciary duty upon us. To the maximum extent permitted by law, you agree that we owe no fiduciary duty or liability to you or any other party. To the extent any such duty or liability may be implied by law or equity, it is hereby expressly disclaimed, waived, and removed to the fullest extent possible. You further acknowledge and agree that our sole obligation to you is as expressly set forth in this Agreement.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                3.6 Release of Claims
              </h3>
              <p className="leading-relaxed">
                You expressly acknowledge and accept all risks associated with accessing and using our products. You expressly release and waive any and all claims, liabilities, causes of action, or damages arising out of or related to your use of our products. If you are a California resident, you waive the rights and protections provided under California Civil Code § 1542. This provision reads as follows: &quot;[A general release] does not extend to claims which the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor or releasing party.&quot;
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
                We own all intellectual property rights and other rights in the products and their content, including software, text, images, trademarks, service marks, copyrights, patents, designs, and the overall &quot;look and feel.&quot; These intellectual property rights are provided subject to the terms of the Copyright License and Trademark Guidelines. Subject to the terms of this Agreement, we grant you a limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to access and use our products under this Agreement.
              </p>
              <p className="leading-relaxed">
                You agree not to use, modify, distribute, alter, reverse engineer, disassemble, or decompile our products for any purpose other than those expressly permitted in this Agreement. Except as expressly stated in this Agreement, no rights, including intellectual property rights in our products, are granted to you.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                4.2 Third-Party Resources and Promotions
              </h3>
              <p className="leading-relaxed">
                Our products may contain references or links to third-party resources, such as information, materials, products, or services, that we do not own or control. Third parties may also offer promotions related to your use of our products. We do not endorse, monitor, guarantee, or assume responsibility for these resources or promotions. Accessing these resources or participating in promotions is at your own risk, and you acknowledge that this Agreement does not govern your interactions or relationships with third parties. You expressly release us from any liability arising from your use of these resources or participation in promotions.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                4.3 Additional Rights
              </h3>
              <p className="leading-relaxed">
                We reserve the right to cooperate with any law enforcement agency, court, or government investigation, order, or third party requesting or directing us to disclose any information or content you provide.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              5. Disclaimer; Risk
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.1 No Warranty
              </h3>
              <p className="leading-relaxed">
                Our products are provided &quot;as is&quot; and &quot;as available.&quot; To the maximum extent permitted by law, we disclaim all representations and warranties of any kind, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. You acknowledge and agree that your use of our products is entirely at your own risk. We do not guarantee that access to our products will be continuous or uninterrupted, timely, or secure. We also do not guarantee that the information provided through our products is accurate, reliable, complete, or up-to-date, or that it is free from errors, defects, viruses, or other harmful components. We do not warrant any advice, information, or statements provided by us regarding our products. We also do not warrant or assume any responsibility for third-party advertisements, offers, or statements regarding our products.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.2 Risk
              </h3>
              <p className="mb-4 leading-relaxed">
                By accessing and using our products, you acknowledge that you are financially and technically sophisticated enough to understand the inherent risks associated with using crypto and blockchain-based systems. You further acknowledge that you possess working knowledge of the use and complexities of Ethereum (ETH), stablecoins, and other digital tokens, including those following the Ethereum token standard (ERC-20).
              </p>
              <p className="mb-4 leading-relaxed">
                You acknowledge that the market for these digital assets is in its early stages and highly volatile due to risk factors including adoption, speculation, technology, security, and regulation. You also understand that anyone can create tokens, including counterfeit versions of existing tokens or tokens falsely claiming to represent projects, and that you must bear the risk of trading such tokens erroneously. You further understand that so-called stablecoins may not be as stable as claimed, may lack full or adequate collateral, and may be subject to panic or runs.
              </p>
              <p className="mb-4 leading-relaxed">
                You further understand that smart contract transactions are automatically executed and settled, and blockchain-based transactions cannot be reversed once confirmed. You acknowledge that transaction costs and speeds with blockchain systems like Ethereum can be highly volatile and may increase significantly at any time. You also acknowledge the risks associated with using expert mode, which may result in significant price declines and high transaction costs.
              </p>
              <p className="mb-4 leading-relaxed">
                If you act as a liquidity provider through this product, you understand that the value of your digital assets may be partially or entirely lost during provisioning due to price fluctuations of tokens in the trading pair or liquidity pool.
              </p>
              <p className="leading-relaxed">
                Finally, you acknowledge that we neither create, own, nor operate any cross-chain bridges and make no representations or warranties regarding their safety or soundness. In summary, you acknowledge that we are not responsible for these variables or risks, do not own or control the protocols, and cannot be held liable for any losses incurred while using our products. By accessing or using the interface to interact with the protocols, you agree to assume full responsibility for all associated risks.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.3 Prohibition of Investment Advice
              </h3>
              <p className="mb-4 leading-relaxed">
                We may provide information regarding tokens related to our products. The provision of such information does not constitute a solicitation to trade in these tokens, nor is it intended to induce purchases based on the information provided. All information provided through our products is for informational purposes only and should not be construed as a recommendation that any specific token is a safe or suitable investment.
              </p>
              <p className="leading-relaxed">
                You should not take or refrain from taking any action based on information provided in our product. By providing token information for your convenience, we do not make any investment recommendations or express opinions regarding the merits of any transaction or opportunity. You are solely responsible for evaluating whether any investment, strategy, or related transaction is suitable for you, considering your personal investment objectives, financial situation, and risk tolerance.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                5.4 External Sales and Activities
              </h3>
              <p className="leading-relaxed">
                The Company solely provides the platform and application services. The Company is not related in any way to external sales teams, marketing groups, third-party promotional activities, investment solicitations, or product sales conducted outside the application. The Company shall bear no liability for any agreements, damages, or disputes arising from such external activities.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              6. Indemnification
            </h2>
            <p className="mb-4 leading-relaxed">
              You agree to indemnify, defend, and hold harmless the Company, each of its officers, directors, employees, contractors, agents, service providers, licensors, and representatives (collectively, the &quot;Company Parties&quot;) from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with: (a) your access to and use of our Products; (b) any breach of any term or condition of this Agreement, any third-party rights, or any applicable laws, rules, or regulations; (c) any access to or use of our Products by any party using devices or accounts owned or controlled by you or with your assistance.
            </p>
            <p className="mb-4 leading-relaxed">
              You also agree to indemnify the Company Parties for disputes between you and (i) other users of the Products or (ii) your customers or users. We will notify you of such claims, lawsuits, or proceedings. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification under this Section, and you agree to cooperate with our reasonable requests in supporting our defense of such matter. No claim against any Company Party may be settled or compromised without our prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              7. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed">
              Under no circumstances shall either party be liable to you for any indirect, punitive, incidental, special, consequential, or exemplary damages. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible assets arising out of the access to or use of, or inability to access or use, the product. We shall not be liable for any damages, losses, or injuries arising from hacking, tampering, or other unauthorized access or use of the Product or the information contained therein. This applies regardless of whether the damages are based on contract, tort, negligence, strict liability, or otherwise, and even if an authorized representative of the Company was notified of, knew of, should have known of, or knew about the possibility of such damages.
            </p>
            <p className="mb-4 leading-relaxed">
              We are not liable for: (A) errors, mistakes, or inaccuracies in the content; (B) personal injury or property damage of any nature resulting from your access to or use of the Product; (C) unauthorized access to or use of our secure servers or databases under our control, or the use of information or data stored therein; (D) interruption or discontinuation of any features related to the Product; (E) bugs, viruses, Trojan horses, or similar issues transmitted to or through the Product; (F) loss or damage resulting from the use of any content provided through the Product; (F) errors or omissions in any content provided through the Product; (G) defamation, assault, or tortious acts by third parties.
            </p>
            <p className="mb-4 leading-relaxed">
              We shall not be liable to you or any third party for any claims or damages arising from any payment or transaction made using our products, or any other payment or transaction conducted through our products.
            </p>
            <p className="mb-4 leading-relaxed">
              We make no warranties or representations, express or implied, regarding any linked third-party services, the third parties that own or operate them, the information they contain, the assets or products or services available through them, or their suitability, privacy, or security. You acknowledge that you are solely responsible and assume all risks arising from the use of any third-party services, websites, applications, or resources. In no event shall we be liable for any damages related to software, products, services, or information provided by third parties and accessed through our products.
            </p>
            <p className="mb-4 leading-relaxed">
              In no event shall our total liability for all damages exceed one hundred dollars ($100.00 USD) or the equivalent in local currency, whichever is greater, depending on the jurisdiction.
            </p>
            <p className="leading-relaxed">
              The foregoing disclaimer shall not apply where prohibited by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              8. Class Action Waiver
            </h2>
            <p className="mb-4 leading-relaxed">
              To the fullest extent permitted by applicable law, you and the Company agree that any dispute, claim, or controversy arising out of or relating to this Agreement or the use of the Products shall be resolved on an individual basis only, and not as a plaintiff or class member in any purported class, collective, representative, or consolidated action.
            </p>
            <p className="mb-4 leading-relaxed">
              You and the Company expressly waive any right to bring, participate in, or otherwise be involved in any class, collective, representative, or consolidated proceeding.
            </p>
            <p className="mb-4 leading-relaxed">
              Arbitration or litigation of any claim shall proceed solely on an individual basis.
            </p>
            <p className="mb-4 leading-relaxed">
              If a claim cannot legally be waived or required to proceed individually, then that portion of the claim must be brought in court, and the remaining portion shall continue in arbitration.
            </p>
            <p className="leading-relaxed">
              This provision shall survive the termination of this Agreement.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
