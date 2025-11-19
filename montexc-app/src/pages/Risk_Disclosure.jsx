export default function Risk_Disclosure() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-8 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0941f6] mb-8">
        Risk Disclosure Statement - Montexc
      </h1>

      <div className="space-y-8 leading-relaxed  ">
        <p>
          This risk disclosure is intended to inform you of the inherent risks
          associated with trading financial instruments through Montexc's
          platform. You must acknowledge that these risks carry the potential
          for substantial financial losses. This disclosure serves as an
          educational resource and does not constitute an exhaustive list of all
          possible trading risks.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          1. Leverage and Margin Trading Risks
        </h2>
        <p>
          When utilizing leverage in margin trading through Montexc, even
          minimal fluctuations in market prices can result in significant
          impacts on your trading account. You must understand that adverse
          market movements against your open positions substantially increase
          the probability of losing your initial capital and additional funds
          designated to maintain your positions. You bear complete
          responsibility for fund management and risk assessment when trading
          with Montexc.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          2. Market Volatility and Financial Instrument Instability
        </h2>
        <p>
          Financial instruments offered by Montexc are subject to considerable
          price fluctuations throughout trading sessions, which may result in
          substantial profits or losses. Market volatility can be influenced by
          economic events, geopolitical developments, and other external factors
          beyond Montexc's control.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          3. Technical and System Risks
        </h2>
        <p>
          Montexc cannot be held liable for financial losses resulting from
          technical malfunctions in your electronic devices, internet
          connectivity, or information systems. When utilizing Montexc's trading
          platforms, you assume risks related to:
        </p>
        <ul className="list-disc  ml-4 text-gray-700">
          <li>
            Hardware, software, or internet connection failures on your end
          </li>
          <li>Incorrect configuration of trading platform settings</li>
          <li>Outdated trading platform versions</li>
          <li>Failure to follow Montexc's platform usage guidelines</li>
        </ul>
        <p>
          Montexc operates under a licensing agreement for the MetaTrader
          trading system and does not provide direct technical support for the
          platform. Therefore, Montexc is not responsible for platform-related
          errors and will not compensate for resulting losses.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          4. Market Execution Risks
        </h2>
        <p>
          You acknowledge that order processing times through Montexc may be
          extended during periods of abnormal market conditions, high
          volatility, or increased trading volume. Such conditions may affect
          the execution price and timing of your trades.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          5. Regulatory and Legal Compliance Risks
        </h2>
        <p>
          You assume full responsibility for ensuring that your trading
          activities through Montexc comply with the laws and regulations of
          your jurisdiction. Montexc is not liable for any consequences arising
          from trading activities conducted in countries where such activities
          are restricted or prohibited.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          6. Trading Platform Operation Risks
        </h2>
        <p>
          All trading instructions submitted through Montexc's platform are
          processed sequentially. You may only submit subsequent orders after
          your previous order has been executed. Orders received before the
          completion of prior orders will be rejected. You are responsible for
          any unintended trading operations that may occur if you resubmit
          orders before receiving execution confirmations.
        </p>
        <p>Important platform considerations:</p>
        <ul className="list-disc  ml-4 text-gray-700">
          <li>Closing order windows does not cancel submitted orders</li>
          <li>
            Only price quotes received from Montexc's servers are considered
            official
          </li>
          <li>
            Quote data can be retrieved from your terminal's database during
            connectivity issues
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          7. Communication and Security Risks
        </h2>
        <p>You acknowledge the risks associated with:</p>
        <ul className="list-disc  ml-4 text-gray-700">
          <li>
            Potential unauthorized access to information transmitted via
            unencrypted communications
          </li>
          <li>
            Delays or failures in receiving important communications from
            Montexc
          </li>
          <li>
            Unauthorized disclosure of your account credentials or confidential
            information
          </li>
        </ul>
        <p>
          You are solely responsible for maintaining the security of your
          Montexc account credentials and any confidential information provided
          by Montexc. Montexc is not liable for losses resulting from the
          unauthorized disclosure of such information.
        </p>

        <h2 className="text-xl font-semibold text-[#0941f6]">
          8. Force Majeure Events
        </h2>
        <p>
          Montexc cannot be held responsible for financial losses arising from
          force majeure events. These include extraordinary circumstances beyond
          the reasonable control of Montexc or its clients, including but not
          limited to:
        </p>
        <ul className="list-disc  ml-4 text-gray-700">
          <li>Natural disasters and extreme weather events</li>
          <li>
            Infrastructure failures affecting utilities or internet services
          </li>
          <li>Cyber attacks, including DDoS attacks on financial systems</li>
          <li>Political unrest, military actions, or terrorist activities</li>
          <li>Government regulatory actions or policy changes</li>
          <li>
            Labor strikes affecting financial markets or service providers
          </li>
        </ul>

        <h2 className="text-xl font-bold text-red-600 mt-8">
          Important Notice
        </h2>
        <p>
          By engaging in trading activities with Montexc, you acknowledge that
          you have read, understood, and accepted all risks outlined in this
          disclosure. You confirm that you possess sufficient knowledge and
          experience to evaluate these risks and make informed trading
          decisions. Montexc strongly recommends seeking independent financial
          advice before engaging in leveraged trading activities.
        </p>
      </div>
    </div>
  );
}
