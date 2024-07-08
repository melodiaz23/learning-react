import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = <>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </>
  }

  return (
    <div>
      {/* Custom Header Component */}
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}
          </ul>
        </section>
        {/* <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section> */}
        <section id="examples">
          <h2>Examples</h2>
          {/* Built-in menu element, can be used to create a list og buttons */}
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            {tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
