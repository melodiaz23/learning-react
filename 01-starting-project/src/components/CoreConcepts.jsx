import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
export default function CoreConcepts() {
  return (
    <>
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
    </>
  )
}