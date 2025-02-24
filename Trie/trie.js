/**
 * TRIE
 *
 * Purpose: Does a word or part of a word.
 * Big(0) = length of word 
 * 
 * Why It Works: 
 * 
 * insert("apple")
 * 
 * root
 *  |
 * [a]
 *  |
 * [p]
 *  |
 * [p]
 *  |
 * [l]
 *  |
 * [e]
 *  |
 *{END}
 * 
 * insert("apply")
 * 
 * root
 *  |
 * [a]
 *  |
 * [p]
 *  |
 * [p]
*   |   
*  [l] 
*  / \ 
* [e] [y]
   |   |
*{END}{END}

search("apple") -> true
search("app")->false
startsWith("appl")->true
insert("app")-> sets last "p" to {end}
 */

class TrieNode {
  constructor() {
    this.end = false;
    this.keys = new Map();
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, node = this.root) {
    // ("apple", root)
    //check if at end of word
    if (word.length === 0) {
      node.end = true;
      return;
    } //check if the letter in "word" is a key
    if (!node.keys.has(word[0])) {
      //if not a key add letter to keys and set as a new node
      node.keys.set(word[0], new TrieNode());
      //keys: {'a' → TrieNode keys: {}
    }
    // Recursively insert the rest of the word ("pple", node at 'a')
    this.insert(word.substring(1), node.keys.get(word[0]));
  }

  search(word, node = this.root) {
    //BASE CASE
    if (word.length === 0 && node.end) {
      return true;
    } else if (word.length === 0) {
      return false;
    } // check if word exists
    else if (!node.keys.has(word[0])) {
      return false;
    } else {
      // Recursively search the rest of the word ("pple", node at 'a')
      return this.search(word.substring(1), node.keys.get(word[0]));
    }
  }
  startsWith(prefix, node = this.root) {
    //BASE CASE
    if (prefix.length === 0) {
      return true;
    } // check if word exists
    else if (!node.keys.has(prefix[0])) {
      return false;
    } else {
      // Recursively search the rest of the word ("pple", node at 'a')
      return this.startsWith(prefix.substring(1), node.keys.get(prefix[0]));
    }
  }
}

function testInsertAndSearch() {
  const trie = new Trie_();
  trie.insert("apple");
  console.log(
    "Test Insert and Search - Expected true, got:",
    trie.search("apple")
  ); // should return true
  console.log(
    "Test Search Non-existent Word - Expected false, got:",
    trie.search("app")
  ); // should return false
}

testInsertAndSearch();

function testSearchNonExistent() {
  const trie = new Trie_();
  trie.insert("hello");
  console.log(
    "Test Search Unrelated Word - Expected false, got:",
    trie.search("world")
  ); // should return false
}

testSearchNonExistent();

function testPrefix() {
  const trie = new Trie_();
  trie.insert("apple");
  console.log(
    "Test Prefix 'app' - Expected true, got:",
    trie.startsWith("app")
  ); // should return true
  console.log("Test Prefix 'ap' - Expected true, got:", trie.startsWith("ap")); // should return true
  console.log("Test Prefix 'a' - Expected true, got:", trie.startsWith("a")); // should return true
  console.log(
    "Test Prefix 'apple' - Expected true, got:",
    trie.startsWith("apple")
  ); // should return true
  console.log(
    "Test Prefix 'apples' - Expected false, got:",
    trie.startsWith("apples")
  ); // should return false
}

testPrefix();

function testMultipleInsertsAndSearches() {
  const trie = new Trie_();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("apricot");
  trie.insert("banana");

  console.log("Search 'apple' - Expected true, got:", trie.search("apple")); // should return true
  console.log("Search 'app' - Expected true, got:", trie.search("app")); // should return true
  console.log("Search 'apricot' - Expected true, got:", trie.search("apricot")); // should return true
  console.log("Search 'banana' - Expected true, got:", trie.search("banana")); // should return true
  console.log("Search 'banan' - Expected false, got:", trie.search("banan")); // should return false
}

testMultipleInsertsAndSearches();

// ---------------------------------------[PRACTICE]----------------------------------------
class TrieNode_ {}
class Trie_ {
  insert(word, node = this.root) {}

  search(word, node = this.root) {}
  startsWith(prefix, node = this.root) {}
}
