import Layout from "../components/Layout";

const BeerFieldGuide = () => (
  <Layout title="Beer Field Guide">
    <h1>Beer Field Guide</h1>
    <blockquote>
      <p>
        <i>Drink Fresh. Burp Hops.</i>
      </p>
      <p>
        —{" "}
        <a href="http://alvaradostreetbrewery.com/">Alvarado Street Brewery</a>
      </p>
    </blockquote>
    <p>
      Beer should be consumed fresh.{" "}
      <a href="https://en.wikipedia.org/wiki/Retronasal_smell">
        Taste is 90% smell
      </a>
      , and in the case of beer what you're smelling are{" "}
      <a href="https://www.researchgate.net/publication/228471869">
        volatile hop aromas
      </a>
      . I believe beer's degradation over time creates space around the world
      for local nanobreweries to outcompete global brands.
    </p>
    <p>Here's what I've discovered through my travels.</p>
    <h2>Singapore</h2>
    <h3>
      <a href="https://pinkblossomsbrewing.com/">Pink Blossoms Brewing</a>
    </h3>
    <p>
      Pink Blossoms is a local treasure, brewed here in Singapore. You won't
      find anything fresher. Their beer can be enjoyed on site from the tap, or
      at home in cans.
    </p>
    <p>
      Recommendation:{" "}
      <a href="https://pinkblossomsbrewing.com/dont-stop-believing/#featured">
        Don't Stop Believing NE IPA
      </a>
      .
    </p>
    <h3>
      <a href="https://www.heartofdarknessbrewery.com.sg/">
        Heart of Darkness Brewery
      </a>
    </h3>
    <p>
      Heart of Darkness was my first love when I arrived in Singapore. They
      boast a wide variety of brews, owing to their fast build-test-deploy
      cycle. Heart of Darkness brews in Saigon, centrally located for APAC
      distribution.
    </p>
    <p>
      Recommendation:{" "}
      <a href="https://heartofdarknessbrewery.com/en/products/our-beer/core-range/dream-alone-pale-ale">
        Dream Alone Pale Ale
      </a>
      .
    </p>
    <h2>San Francisco</h2>
    <h3>
      <a href="https://fieldworkbrewing.com/">Fieldwork Brewing</a>
    </h3>
    <p>
      Bars and restaurants in the San Francisco Bay Area commonly list
      "Fieldwork IPA" on their menu. If they could be more specific, they would.
      The thing is, Fieldwork ships them new IPAs faster than they can print
      menus!
    </p>
    <p>
      Recommendation:{" "}
      <a href="https://fieldworkbrewing.com/our-beer/stereotypical/">
        Stereotypical West Coast IPA
      </a>
      , my all-time favorite.
    </p>
    <h2>Los Angeles</h2>
    <h3>
      <a href="https://www.monkishbrewing.com/">Monkish Brewing</a>
    </h3>
    <p>
      Monkish serves{" "}
      <a href="https://www.ratebeer.com/ratebeerbest/2019/best-brewers-top-100">
        world class
      </a>{" "}
      beer just 10 minutes south of LAX. Biergarten > traffic jam.
    </p>
    <p>
      Recommendation:{" "}
      <a href="https://untappd.com/b/monkish-brewing-co-atomically/1627999">
        Atomically IPA
      </a>
      .
    </p>
  </Layout>
);

export default BeerFieldGuide;
