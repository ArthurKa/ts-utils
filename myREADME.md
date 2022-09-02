## Usage

```ts
import { checkExactShape, ExactShape } from '<pkg.name>';

const tooFew = { name: 'Stefan' };
const exact = { name: 'Stefan', age: '31' };
const tooMany = { name: 'Stefan', age: '31', sex: 'male' };

const record: Record<string, string> = {};
type R = typeof record;
type Exact = typeof exact;
interface ExtendedRecord extends Exact, R {}
const extendedRecord: ExtendedRecord = {
  name: 'Stefan',
  age: '31',
  sex: 'male',
};

type Person = {
  name: string;
  age: string;
};


function savePerson<T extends Person>(e: ExactShape<Person, T>) {

}

savePerson(exact);
// @ts-expect-error
savePerson(tooFew);
// @ts-expect-error
savePerson(tooMany);
// @ts-expect-error
savePerson(record);
// @ts-expect-error
savePerson(extendedRecord);

function getPerson(): Person {
  const e = exact;
  // const e = tooFew;
  // const e = tooMany;
  // const e = record;
  // const e = extendedRecord;

  checkExactShape<Person>()(e);
  return e;
}

const person = getPerson();
console.info(person);
```
