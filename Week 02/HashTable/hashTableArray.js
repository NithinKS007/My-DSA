// Buckets:
// Index 0: [ ]  <-- Empty bucket
// Index 1: [ ]  <-- Empty bucket
// Index 2: [ ]  <-- Empty bucket
// Index 3: [ ['apple', 10], ['banana', 20] ]  <-- Collision handling: 
//                                                 both 'apple' and 'banana' 
//                                                 are stored in the same bucket
// Index 4: [ ['orange', 15] ]  <-- No collision for 'orange', so it goes to index 4



class HashTable {
  constructor(capacity) {
    this.buckets = new Array(capacity);
    this.capacity = capacity;
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];

    const existingEntryIndex = bucket.findIndex(
      ([existingKey]) => existingKey === key
    );

    if (existingEntryIndex !== -1) {
      bucket[existingEntryIndex][1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      const entry = bucket.find(([existingKey]) => existingKey === key);
      return entry ? entry[1] : undefined;
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      const entryIndex = bucket.findIndex(
        ([existingKey]) => existingKey === key
      );

      if (entryIndex !== -1) {
        bucket.splice(entryIndex, 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        console.log(`Bucket ${i}:`, this.buckets[i]);
      } else {
        console.log(`Bucket ${i}: empty`);
      }
    }
  }
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      return bucket.some(([existingKey]) => existingKey === key);
    }

    return false;
  }
}

const table = new HashTable(10);
table.set("name", "Nithin");
table.set("age", "20");
table.set("naem", "Kottayam");
table.set("maen", "Kottayam");
table.set("Place2", "Ernakulam");
table.has("age");

table.display();
