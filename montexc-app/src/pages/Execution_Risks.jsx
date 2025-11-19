export default function Execution_Risks() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 mt-8 text-gray-800 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0941f6] mb-6">
        Internet Trading Risks
      </h1>
      <p className="mb-6">
        There are inherent risks associated with utilizing an internet-based
        deal-execution trading system, including hardware, software, and
        internet connection failures. Since Montexc does not control signal
        power, its reception or routing via the internet, your equipment's
        configuration, or its connection's reliability, we cannot be responsible
        for communication failures, distortions, or delays when trading via the
        internet. To maximize your trading experience and use of Montexc's
        services, we employ robust backup systems and contingency plans to
        minimize the possibility of system disruption or failure.
      </p>

      {/* Market Liquidity Risks */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Market Liquidity Risks
      </h2>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Low Liquidity Periods
      </h3>
      <p className="mb-4">
        The first few hours after market opening tend to experience thinner
        liquidity than usual until major market sessions begin. These thinner
        markets may result in wider spreads, with fewer buyers and sellers
        available. This primarily occurs because for the initial hours after
        opening, it remains the weekend in most of the world. Various other
        factors can contribute to reduced liquidity conditions. In illiquid
        markets, traders may experience difficulty entering or exiting positions
        at their requested price, encounter execution delays, and receive
        execution prices that differ significantly from their requested rates.
      </p>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Execution Delays
      </h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Technical issues with your internet connection to Montexc</li>
        <li>Delays in order confirmations from liquidity providers</li>
        <li>Lack of available liquidity for specific currency pairs</li>
      </ul>
      <p className="mb-6">
        Due to inherent market volatility, traders must maintain a working and
        reliable internet connection. Circumstances may arise where your
        internet connection cannot maintain constant connectivity with Montexc's
        servers due to insufficient signal strength from wireless or dial-up
        connections.
      </p>

      <h2 className="text-2xl font-semibold text-[#0941f6] mt-6 mb-2">
        Volume and Market Conditions
      </h2>
      <h4 className="text-lg font-semibold text-[#0941f6] mt-4 mb-2">
        High Volume Impact
      </h4>
      <p className="mb-4">
        When underlying markets become very active, the volume of trades and
        orders entering the online trading platform increases tremendously,
        affecting execution speed. Under these circumstances, traders may
        experience longer waiting times for order confirmations.
      </p>

      <h4 className="text-lg font-semibold text-[#0941f6] mt-4 mb-2">
        Fast Markets
      </h4>

      <p className="mb-4">
        Fast markets are characterized by high-volume trading sessions marked by
        extreme price fluctuations and order imbalances resulting from numerous
        investors simultaneously entering buy or sell orders for the same
        currency. These imbalances commonly create wide price variances over
        short periods. Fast markets can affect particular currencies, currency
        groups, or the entire market, often triggered by material news
        announcements, market developments, or trading halts in other
        securities.
      </p>

      <p className="mb-4">In fast market conditions:</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Order execution ability may be severely limited</li>
        <li>Order execution may be significantly delayed</li>
        <li>
          Market orders may be executed at prices substantially different from
          quoted prices
        </li>
      </ul>

      {/* Market Gaps and Weekend Risks */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Market Gaps and Weekend Risks
      </h2>
      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Price Gapping
      </h3>
      <p className="mb-6">
        Sunday opening prices may differ significantly from Friday closing
        prices. While opening prices sometimes remain near Friday's closing
        levels, substantial gaps can occur due to important news announcements
        or economic events that alter market perception of currency values.
        Traders holding positions or orders over weekends should be comfortable
        with potential gapping scenarios.
      </p>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Weekend Risk Management
      </h3>
      <p className="mb-6">
        Traders concerned about extreme weekend volatility or inappropriate
        weekend risk for their trading style may close orders and positions
        before the weekend. Those maintaining open weekend positions must
        understand that major economic events and news announcements can
        significantly affect underlying position values. Given market
        volatility, prices commonly gap several pips between market close and
        open.
      </p>

      {/* Rollover and Swap Rates */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Rollover and Swap Rates
      </h2>
      <p className="mb-4">
        Rollover involves simultaneously closing and opening positions at
        specific times to avoid settling and delivering purchased currencies.
        This term also refers to interest charged or applied to trader accounts
        for positions held "overnight" (after 5 p.m. ET on trading platforms).
        The time when positions are closed/reopened and rollover fees are
        debited/credited is called Trade Rollover (TRO).
      </p>

      <p className="mb-4">Important rollover considerations:</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Rollover charges typically exceed rollover accruals</li>
        <li>Hedged accounts may sustain losses due to rollover spreads</li>
        <li>Spreads during rollover may widen</li>
      </ul>

      {/* Margin Call Policy */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Montexc Margin Call Policy
      </h2>
      <p className="mb-4">
        Important Notice: Montexc does not provide advance margin call warnings
        before liquidating open positions. Margin calls trigger when usable
        margin reaches zero, occurring when floating losses reduce account
        equity to levels at or below margin requirements.
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Margin calls result in liquidation unless otherwise specified</li>
        <li>Clients must maintain minimum margin requirements</li>
        <li>All open positions are subject to liquidation if not maintained</li>
        <li>Stop Loss Order placement is the client's responsibility</li>
      </ul>

      {/* Order Execution Policies */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Order Execution Policies
      </h2>
      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Reset Orders
      </h3>
      <p className="mb-4">
        Market volatility creates conditions making order execution difficult at
        specified prices due to extremely high order volumes. By execution time,
        bid/ask prices for counterparty positions may be several pips away from
        original quotes.
      </p>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Limit and Stop Orders
      </h3>
      <p className="mb-4">
        All limit/stop orders (stop loss, buy limit, buy stop, sell limit)
        execute as market orders. Execution at your set price is not guaranteed.
        While Montexc strives to execute all orders at quoted prices, slippage
        of several pips may occur under increased market volatility. Montexc
        executes orders within 200 milliseconds even under volatile conditions.
      </p>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Hanging Orders
      </h3>
      <p className="mb-6">
        During high-volume periods, hanging orders may occur when orders are
        processing but execution confirmation is pending. Orders appear
        highlighted in red with "executed" or "processing" status. These orders
        await liquidity provider confirmation of quote availability. Heavy
        trading volumes may create order queues, causing confirmation delays.
      </p>

      <p className="mb-4">Outcomes vary by order type:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>
          <strong>Market Range Orders:</strong> Orders unfillable within
          specified ranges or after delay expiration will not execute
        </li>
        <li>
          <strong>At Market Orders:</strong> Every attempt is made to fill
          orders at next available market prices
        </li>
      </ul>

      {/* Pricing and Spread */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Pricing and Spread Conditions
      </h2>
      <p className="mb-6">
        Greyed-out pricing occurs when forex liquidity providers supplying
        pricing to Montexc aren't actively making markets for particular
        currency pairs, reducing liquidity. Montexc doesn't intentionally grey
        out prices; however, severe spread increases may occur due to liquidity
        provider connectivity loss or dramatic market-affecting announcements.
        Such pricing conditions may trigger margin calls.
      </p>

      {/* Hedging Policies */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Hedging Policies
      </h2>
      <p className="mb-6">
        Hedging allows traders to simultaneously hold buy and sell positions in
        identical currency pairs, enabling market entry without directional
        commitment. While hedging may mitigate future losses, it doesn't prevent
        accounts from sustaining further losses. In forex markets, traders can
        hedge fully by quantity but not by price due to bid/ask spreads.{" "}
      </p>

      <p>
        Montexc's margin requirement is zero for fully hedged positions. When
        one hedged position leg closes, remaining exposure becomes subject to
        normal margin requirements. Traders should consider these hedging
        factors:
      </p>
      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Diminishing Margin Risk
      </h3>
      <p className="mb-6">
        Margin calls may occur even in fully hedged accounts when spreads widen, causing
remaining margin to diminish. Insufficient margin to maintain open positions may
trigger margin calls, closing all account positions. Despite long/short position
impressions of limited market exposure, insufficient available margin combined with
spread widening may result in margin calls on all positions.
      </p>

      {/* Exchange Rate and Costs */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Exchange Rate and Cost Factors
      </h2>
      <p className="mb-6">
        Exchange rate fluctuations define values given to pip movements for particular currency
pairs. These costs represent currency amounts gained or lost with each pip movement,
denominated in the account's base currency.
      </p>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Leverage
      </h3>
      <p className="mb-6">
        Montexc provides leverage up to 200:1 on forex trading accounts. Leverage is a
double-edged instrument that can dramatically amplify both profits and losses. Trading
foreign exchange with any leverage level may not suit all investors.
      </p>

      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Slippage
      </h3>
      <p className="mb-6">
        Montexc aims to provide optimal execution, filling all orders at requested prices.
However, orders may experience slippage during increased volatility or volume periods,
most commonly during fundamental news events or limited liquidity periods. Order type,
quantity demanded, and specific instructions impact execution.
      </p>

      <p className="mb-4">Order instruction examples:</p>

      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>
          <strong>Good Till Cancelled (GTC) Orders: </strong> Entire orders fill at next available prices upon
receipt.
        </li>
        <li>
          <strong> Immediate or Cancel (IOC) Orders:</strong> Orders fill partially or completely at next
available prices, with remaining amounts canceled if immediate liquidity is
unavailable.
        </li>

<li>
          <strong> Fill or Kill (FOK) Orders:</strong>  Orders must fill entirely or not at all.
        </li>
      </ul>
<p className="mb-4">
  Market volatility may create difficult execution conditions where received prices differ
significantly from selected quotes due to rapid market movements. Sufficient liquidity
must exist to execute all trades at any given price under Montexc's forex execution
model.
</p>



      {/* Disclaimer */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Market Opinions and Analysis Disclaimer
      </h2>
      <p className="mb-6">
        Any opinions, news, research, analyses, prices, or other information contained on the
Montexc website is provided as general market commentary and does not constitute
investment or financial advice. If determined to be financial advice, it is general only. By
using the Montexc website, you acknowledge and agree that information has been
provided without considering your financial situation, objectives, or goals. </p>

<p className="mb-4">
Montexc will not accept liability for any loss or damage (whether arising under contract,
tort including negligence, or otherwise), including without limitation any loss of profit,
which may arise directly or indirectly from using or relying on such information.
      </p>

      {/* Trading Restrictions */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Trading Restrictions
      </h2>
      <h3 className="text-xl font-semibold text-[#0941f6] mt-6 mb-2">
        Scalping Policy
      </h3>
      <p className="mb-6">Montexc does not permit scalping strategies. Clients cannot close trades within 90
seconds of opening.</p>

      {/* Governing Law */}
      <h2 className="text-2xl font-semibold text-[#0941f6] mt-10 mb-4">
        Governing Law and Jurisdiction
      </h2>
      <p className="mb-6">
        This agreement and all trading activities are governed by the statutes and laws of
[Jurisdiction]. Unless otherwise agreed, these terms and conditions and their
enforcement are governed by [Jurisdiction] laws, without regard to conflict of law
principles. These terms benefit Montexc's successors and assigns, whether by merger,
consolidation, or otherwise, regardless of your residence or business transaction
location with Montexc.
</p>

<p>

  Unless an applicable arbitration clause governs a dispute, you irrevocably agree to
submit to [Jurisdiction] court jurisdiction and waive any objection to venue convenience,
propriety, or similar grounds.
      </p>

      
    </div>
  );
}
