import { useState } from 'react';
import { CORE_CONCEPTS } from './data.JS'
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton'
import { EXAMPLES } from './data.js'


function App() {
  const [ selectedTopic, setSelectedTopic] = useState()

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title}{...conceptItem}/>)}
        </ul>

        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectedTopic === 'components' ? true :false} onSelect={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx' ? true :false} onSelect={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props' ? true :false} onSelect={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state' ? true :false} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          
            {!selectedTopic ? (<p>Please select a topic.</p>) : (
              <div id='tab-content'>
                 {selectedTopic}
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )
            }
        </section>
      </main>
    </div>
  );
}

export default App;