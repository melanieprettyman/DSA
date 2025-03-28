/**
 * GRAPHS
 *
 * Definition: A graph is a collection of nodes (vertices) and edges connecting some or all of them. Graphs can model many real-world concepts like networks
 *             (social, communication, data flow, etc.).
 *
 * Graph Types:
 * - Undirected Graph: Edges have no direction. The connection between two vertices is bi-directional.
        1 - 2
        |   |
        3 - 4 - 5

 * - Directed Graph (Digraph): Edges have a direction. Each edge points from one vertex to another.
        1 -> 2
        ^    |
        |    v
        4 <- 3 -> 5
 * - Weighted Graph: Each edge has a weight or cost associated with it, useful for representing routes with distances, costs, or other metrics.
        1 - (1.5) - 2
        |         |
      (2.0)     (3.5)
        |         |
        3 - (1.0) - 4

 * - Unconnected Graph: Not all vertices are connected; there can be isolated nodes or subgraphs.
      1 - 2     5
              /
        3 - 4

 *
 * Representation:
 *      1   5
        |   |        
    2 - 3 - 4 
        |
        0
 * - Adjacency List: Each index points to it's corresponding node, any nodes attached go into an array at that index. 
    [
    0 [3],
    1 [3],
    2 [3],
    3 [0,1,2,4],
    4 [3, 5],
    5 [4]
    ]
 * - Adjacency Matrix: A 2D array where the intersection of row 'v' and column 'w' indicates the presence (and possibly the weight) of an edge between vertex 'v' and vertex 'w'. Suitable for dense graphs.
 *     0  1  2  3  4  5
    0 [0, 0, 0, 1, 0, 0]
    1 [0, 0, 0, 1, 0, 0]
    2 [0, 0, 0, 1, 0, 0]
    3 [1, 1, 1, 0, 1, 1]
    4 [0, 0, 0, 1, 0, 0]
    5 [0, 0, 0, 1, 0, 0]

 * Properties:
 * - Path: A sequence of vertices where each adjacent pair is connected by an edge.
 * - Cycle: A path with at least one edge whose start and end vertices are the same.
 * - Connected Graph: There is a path between every pair of vertices in an undirected graph.
 * - Components: In an unconnected graph, a component is a connected subgraph. Each graph is either connected or made up of multiple disconnected components.
 * - Degree: Number of edges incident to a vertex (in undirected graphs), or the number of edges coming into (in-degree) or going out of (out-degree) a vertex (in directed graphs).
 *
 * Algorithms:
 * - Depth-First Search (DFS): Starts at the root node and explores as far as possible along each branch before backtracking.
 * - Breadth-First Search (BFS): It starts at the root node and explores all neighbor nodes at the present depth prior to moving on to nodes at the next depth level.
 * - Topological Sort: A linear ordering of vertices such that for every directed edge u->v, vertex u comes before v in the ordering. 
 *                     Topological Sorting for a graph is not possible if the graph is not a DAG (Directed Acyclic Graph).
 *
 * Traversal Techniques:
 * - DFS and BFS can be used to explore all the nodes and edges in a graph.
 * - BFS is particularly useful for finding the shortest path on unweighted graphs.
 * - DFS can be used to detect cycles and is useful in topological sorting or finding connected components.
 *
 */

/*
 const adjacencyList = {
  0: [3, 1],
  1: [0],
  2: [8, 3],
  3: [2, 4, 5, 0],
  4: [3, 6],
  5: [3],
  6: [4, 7],
  7: [6],
  8: [2]
};

         5   
         |          
 8 - 2 - 3 - 4 - 6 - 7
         |
   1  -  0
 Traversal = [0,1,3,4,5,2,6,8,7]  
 Process each nodes immidiate neighbor
 */
function BFSGraph(graph) {
  let queue = [0]; // Start BFS from vertex 0
  let values = []; // To store the order of traversal
  let seen = {}; // To keep track of visited vertices

  while (queue.length) {
    let vertex = queue.shift(); // Dequeue the first vertex
    values.push(vertex); // Add it to the traversal order
    seen[vertex] = true; // Mark this vertex as seen

    let connections = graph[vertex]; // Get all adjacent vertices
    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];
      if (!seen[connection]) {
        // If the vertex hasn't been seen before
        seen[connection] = true; // Mark it as seen
        queue.push(connection); // Enqueue it for future processing
      }
    }
  }
  return values;
}

/*
 const adjacencyList = {
  0: [3, 1],
  1: [0],
  2: [8, 3],
  3: [2, 4, 5, 0],
  4: [3, 6],
  5: [3],
  6: [4, 7],
  7: [6],
  8: [2]
};

         5   
         |          
 8 - 2 - 3 - 4 - 6 - 7
         |
   1  -  0
 Traversal = [0,1,3,4,6,7,5,2,8]  
 */
function DFSGraph(graph, vertex = 0, values = [], seen = {}) {
  values.push(vertex); // Add current vertex to the traversal order
  seen[vertex] = true; // Mark this vertex as seen

  let connections = graph[vertex]; // Get all adjacent vertices
  for (let i = 0; i < connections.length; i++) {
    let connection = connections[i];
    if (!seen[connection]) {
      // If the vertex hasn't been seen before
      DFSGraph(graph, connection, values, seen); // Recursively visit it
    }
  }
  return values; // Return the list of vertices in the order they were visited
}

/*
 Topological Sort
 - Edges must be directed
 - Indeegree: how many connections are comming into a node 

 1. Keep a node and it's value if it's indegree = 0
 2. Remove node from graph, and this will reduce the indegree of any of it's nodes directing to it
 3. Will not work w. Cyclical graphs 

 prereqs = [ [1,0], [2,1], [2,5], [0,3], [4,3], [3,5], [4,5]]

     3 --> 0 --> 1 --> 2
     |          |     |
     v          v     v
     5 <--------4-----+
 
  adjacencyList = {
    0: [1],
    1: [2],
    2: [5],
    3: [0, 5],
    4: [3, 5],
    5: []
  };

  inDegree = {
    0: 1,  // Node 0 has 1 edge pointing to it (from node 3)
    1: 1,  // Node 1 has 1 edge pointing to it (from node 0)
    2: 2,  // Node 2 has 2 edges pointing to it (from nodes 1 and 4)
    3: 1,  // Node 3 has 1 edge pointing to it (from node 4)
    4: 0,  // Node 4 has no edges pointing to it
    5: 3   // Node 5 has 3 edges pointing to it (from nodes 2, 3, and 4)
  };
 */
function topologicalSort(n, prereqs) {
  let inDegree = new Array(n).fill(0);
  let adjacencyList = new Array(n).fill(null).map(() => []);

  // Building the graph and in-degree array
  for (let i = 0; i < prereqs.length; i++) {
    let [course, prerequisite] = prereqs[i];
    inDegree[course]++;
    adjacencyList[prerequisite].push(course);
  }

  // Finding all nodes with no incoming edge
  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0; // Count of nodes processed

  // Processing nodes with zero in-degree
  while (queue.length) {
    let current = queue.shift();
    count++; // Increment count of nodes processed

    // Reduce in-degree of adjacent nodes
    let adjacentNodes = adjacencyList[current];
    for (let i = 0; i < adjacentNodes.length; i++) {
      let next = adjacentNodes[i];
      inDegree[next]--;
      if (inDegree[next] === 0) {
        queue.push(next); // Add to queue if no incoming edges left
      }
    }
  }

  // If count matches n, all nodes were processed, so no cycle exists
  return count === n;
}

// ---------------------------------------[PRACTICE]----------------------------------------
// Implement the BFSGraph_ function to perform a breadth-first search on a graph represented as an adjacency list.
// Start from the vertex 0 and return an array that represents the order in which the vertices are visited.
function BFSGraph_(graph) {}

//Write a function DFSGraph_ that performs a depth-first search on a graph starting from the vertex 0. The graph is given
// as an adjacency list. Return an array of vertices in the order they are visited. Use a recursive approach to implement your function.
function DFSGraph_(graph, vertex = 0, values = [], seen = {}) {}

//perform a topological sort on a directed graph with n vertices and a list of prerequisites prereqs. Each element in prereqs is a pair [a, b]
// indicating that b is a prerequisite of a. Return true if a valid topological ordering exists, otherwise return false.
function topologicalSort_(n, prereqs) {}
// ---------------------------------------[TEST]----------------------------------------
function testBFSGraph() {
  const adjacencyList = {
    0: [3, 1],
    1: [0],
    2: [8, 3],
    3: [2, 4, 5, 0],
    4: [3, 6],
    5: [3],
    6: [4, 7],
    7: [6],
    8: [2],
  };

  const expectedTraversal = [0, 3, 1, 2, 4, 5, 8, 6, 7];
  const result = BFSGraph_(adjacencyList);
  console.log(
    "BFS Test:",
    JSON.stringify(result) === JSON.stringify(expectedTraversal)
      ? "PASS"
      : "FAIL",
    "| Result:",
    result,
    "| Expected:",
    expectedTraversal
  );
}
function testDFSGraph() {
  const adjacencyList = {
    0: [3, 1],
    1: [0],
    2: [8, 3],
    3: [2, 4, 5, 0],
    4: [3, 6],
    5: [3],
    6: [4, 7],
    7: [6],
    8: [2],
  };

  const expectedTraversal = [0, 3, 2, 8, 4, 6, 7, 5, 1]; // Possible DFS traversal order
  const result = DFSGraph_(adjacencyList);
  console.log(
    "DFS Test:",
    JSON.stringify(result) === JSON.stringify(expectedTraversal)
      ? "PASS"
      : "FAIL",
    "| Result:",
    result,
    "| Expected:",
    expectedTraversal
  );
}
function testTopologicalSort() {
  const prereqs = [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ];
  const n = 6; // Total number of courses or nodes in graph

  // Test if all nodes are processed correctly, indicating no cycles and correct order processing
  const result = topologicalSort_(n, prereqs);
  console.log(
    "Topological Sort Test:",
    result ? "PASS" : "FAIL",
    "| All nodes were processed correctly:",
    result
  );
}

testTopologicalSort();

testDFSGraph();

testBFSGraph();
