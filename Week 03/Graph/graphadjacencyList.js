class Graph {
  constructor() {
    this.adjacencyList = {}; // Initialize an empty adjacency list to hold the graph
    // Each vertex will be a key in this object, and
    // its value will be a set containing the neighbors of that vertex
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set(); // Create a set to hold the vertex's neighbors
      // This method checks if the vertex already exists in the graph.
      // If it doesn't, it adds the vertex and initializes it with an empty Set to store its
      // adjacent vertices.
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);

    //     Adding Edge: addEdge('A', 'B')

    // First, check if A exists. It doesn't, so we call this.addVertex('A').
    // Then, check if B exists. It doesn't, so we call this.addVertex('B').
    // Finally, we add B to the adjacency list of A (i.e., A points to B).

    // {
    //   A: Set { 'B' },
    //   B: Set {}
    // }

    // Adding Another Edge: addEdge('A', 'C')

    // Check if A exists: Yes, it does.
    // Check if C exists: No, so we call this.addVertex('C').
    // Add C to A's adjacency list (i.e., A points to C).

    // {
    //   A: Set { 'B', 'C' },
    //   B: Set {},
    //   C: Set {}
    // }

    // This method creates an edge between two vertices by adding each vertex to the other's
    // adjacency list.
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
  // First, it checks if the vertex exists in the adjacency list.
  // Then, it loops through all its neighbors and removes the edges connecting the vertex to those neighbors.
  // Finally, it deletes the vertex from the adjacency list

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " => " + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  dfs(startNode) {
    const stack = [startNode];
    const visited = new Set();
    const result = [];

    if (!this.adjacencyList[startNode]) {
      console.log("Starting node does not exist in the graph.");
      return result;
    }

    while (stack.length) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }

    return result;
  }
  // DFS explores as deeply as possible down one path before backing up and exploring other paths.
  // It's like going down a maze and following one path to the end before turning back and trying other paths

  // Start at a given node (the root node).
  // Explore a neighbor node, then go deeper and explore its neighbors.
  // Repeat the process until there are no more unvisited neighbors,
  // then backtrack (return to the previous node and explore its next neighbor).
  // Keep track of visited nodes to avoid revisiting them.

  //     A
  //    / \
  //   B   C
  //  / \
  // D   E

  // Start at node A.

  // First, you go to node B (one of A's neighbors).
  // From B, go to D (since D is a neighbor of B).
  // D has no unvisited neighbors, so you backtrack to B.
  // Now go to E (the next neighbor of B).
  // E has no unvisited neighbors, so you backtrack to B, and then to A.
  // Now go to C (A's other neighbor).
  // C has no unvisited neighbors, so the search finishes.

  //   Step-by-Step DFS Example:
  // Start at node A.
  // Stack: [A]
  // Visited: {}
  // Result: []

  // Visit node A. Mark it visited. Go to neighbor B.
  // Stack: [A]
  // Visited: {A}
  // Result: [A]

  // Visit node B. Mark it visited. Go to neighbor D.
  // Stack: [A, B]
  // Visited: {A, B}
  // Result: [A, B]

  // Visit node D. Mark it visited. No unvisited neighbors, backtrack to B.
  // Stack: [A, B, D]
  // Visited: {A, B, D}
  // Result: [A, B, D]

  // Back at node B, go to the next neighbor E.
  // Stack: [A, B]
  // Visited: {A, B, D}
  // Result: [A, B, D]

  // Visit node E. Mark it visited. No unvisited neighbors, backtrack to B, then to A.
  // Stack: [A, B, E]
  // Visited: {A, B, D, E}
  // Result: [A, B, D, E]

  // Back at node A, go to neighbor C.
  // Stack: [A]
  // Visited: {A, B, D, E}
  // Result: [A, B, D, E, C]

  // Visit node C. Mark it visited. No unvisited neighbors, finish.
  // Stack: [A, C]
  // Visited: {A, B, D, E, C}
  // Result: [A, B, D, E, C]

  // DFS finishes with the traversal order: [A, B, D, E, C]
  // DFS explores the graph deeply by following one path as far as possible before backtracking.
  // It uses a stack for the traversal and keeps track of visited nodes to avoid cycles.
  // It adds each visited node to the result array.

  bfs(startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];

    if (!this.adjacencyList[startNode]) {
      console.log("Starting node does not exist in the graph.");
      return result;
    }

    while (queue.length) {
      const vertex = queue.shift();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }
  // BFS explores nodes level by level,
  // starting from the root node and exploring all its neighbors first before moving on to their neighbors.

  // Start at a given node.
  // Explore all the neighbors of the current node (add them to the queue).
  // Move to the next node in the queue, and repeat the process until all nodes have been visited.

  //     A
  //   / \
  //   B   C
  // / \
  // D   E

  // Start at node A.
  // Explore all neighbors of A, i.e., nodes B and C.
  // Then, explore the neighbors of B (i.e., D and E).
  // Finally, explore the neighbors of C

  //   Start at node A.
  // Queue: [A]
  // Visited: {}
  // Result: []

  // Visit node A. Mark it visited. Add neighbors B and C to the queue.
  // Queue: [B, C]
  // Visited: {A}
  // Result: [A]

  // Visit node B. Mark it visited. Add neighbors D and E to the queue.
  // Queue: [C, D, E]
  // Visited: {A, B}
  // Result: [A, B]

  // Visit node C. Mark it visited. No new neighbors to add.
  // Queue: [D, E]
  // Visited: {A, B, C}
  // Result: [A, B, C]

  // Visit node D. Mark it visited. No new neighbors to add.
  // Queue: [E]
  // Visited: {A, B, C, D}
  // Result: [A, B, C, D]

  // Visit node E. Mark it visited. No new neighbors to add.
  // Queue: []
  // Visited: {A, B, C, D, E}
  // Result: [A, B, C, D, E]

  // BFS finishes with the traversal order: [A, B, C, D, E]

  checkTwoNodesareConnected(vertex1, vertex2) {
    return this.hasEdge(vertex1, vertex2) || this.bfs(vertex1).includes(vertex2);
  }

  shortestPath(startNode, endNode) {
    const queue = [[startNode]];
    const visited = new Set();

    if (!this.adjacencyList[startNode] || !this.adjacencyList[endNode]) {
      console.log("One or both of the nodes do not exist in the graph.");
      return [];
    }

    while (queue.length) {
      const path = queue.shift();
      const currentNode = path[path.length - 1];

      if (currentNode === endNode) {
        return path;
      }

      if (!visited.has(currentNode)) {
        visited.add(currentNode);

        for (const neighbor of this.adjacencyList[currentNode]) {
          const newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
    }

    return [];
  }
  // “Do I ever visit a node that I’ve already seen and it’s not the one I just came from?”
  detectCycle() {
    const visited = new Set();

    const stack = [];

    for (let vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        stack.push([vertex, null]);

        while (stack.length > 0) {
          const [currentNode, parent] = stack.pop();

          if (!visited.has(currentNode)) {
            visited.add(currentNode);

            for (const neighbor of this.adjacencyList[currentNode]) {
              if (visited.has(neighbor) && neighbor !== parent) {
                return true;
              }

              stack.push([neighbor, currentNode]);
            }
          }
        }
      }
    }
    return false;
  }

  // ✅ Step 1: Understand What a Cycle Means in This Context
  // A cycle happens when you revisit a node that you’ve already seen, 
  // but you didn’t just come from it.

  // This means the graph has a “loop” — a path that closes back on itself.

  // ✅ Step 2: Imagine You’re Walking the Graph
  // Let’s say you're standing at node A.

  // You mark A as “visited.”

  // From A, you walk to B.

  // You mark B as visited.

  // From B, you walk to C.

  // You mark C as visited.

  // From C, you see neighbor A again.

  // You say: “Hmm, I’ve seen A before... but did I just come from A?”

  // Yes? Then it’s fine — no cycle here.

  // No? Then A is showing up again from a different path → that’s a cycle.

  // ✅ Step 3: Think About How You’ll Track This
  // As you walk:

  // Keep a list of visited nodes so you know who you’ve seen.

  // Also remember where you just came from — your "parent" — 
  // so you can ignore that when checking for revisits.

  // ✅ Step 4: Repeat for All Nodes
  // Graphs aren’t always one big piece — so:

  // For each node in the graph:

  // If you haven’t visited it yet:

  // Start a new walk from there.

  // Apply the same logic above.

  // This covers disconnected components.

  // 🧠 Recap Mental Checklist:
  // 🚶 Start at any unvisited node.

  // 📌 Mark it as visited.

  // 🔁 For each neighbor:

  // If it’s not visited → walk to it.

  // If it is visited → check:

  // Is it my parent?

  // ✅ Yes → okay.

  // ❌ No → cycle!

  // 🔄 Repeat for all nodes.

  // A visited set keeps track of visited nodes to avoid reprocessing nodes.
  // A stack is used to simulate the recursive DFS process, pushing nodes onto the stack
  // along with their parent nodes to check for back edges.

  // For Each Vertex:
  // The code iterates through all vertices in the graph (represented as this.adjacencyList).
  // For each unvisited vertex, a DFS search is initiated by pushing the current vertex and its
  // parent (which is null for the starting vertex) onto the stack.

  // DFS Loop:
  // The stack stores nodes along with their parent, ensuring that we do not mistake the
  // parent-child relationship as a cycle.
  // At each step of the loop, the current node is popped from the stack.
  // If the node has not been visited before, it's marked as visited.
  // Then, all neighbors of the current node are pushed onto the stack (with the current
  // node as their parent).

  // Cycle Detection:
  // For each neighbor of the current node:
  // If the neighbor is already visited and it's not the parent node (i.e., it's
  // not the node from which the current node was discovered), then a cycle is detected
  // because this means we’ve found a back edge.

  // If no cycle is found, the neighbor is pushed onto the stack with the
  // current node as its parent.

  // Return:
  // If a cycle is detected, the function returns true.

  // If no cycles are detected after processing all nodes,
  // it implicitly returns undefined (which means no cycle was found).

  // DFS Traversal: The algorithm performs a Depth-First Search to explore each node and its neighbors.
  // Parent Tracking: By keeping track of the parent of each node, the algorithm can differentiate
  // between a back edge (cycle) and a parent-child relationship.

  // Cycle Detection: A cycle is detected when a node’s neighbor has already been visited,
  // and that neighbor is not the parent of the current node. This indicates that the graph
  // contains a back edge, meaning there's a loop or cycle in the graph.

  // Time Complexity: O(V + E)
  // Where V is the number of vertices and E is the number of edges. Each node and edge is
  // visited once during the DFS traversal.
  //

  //   A
  //  / \
  // B   C
  //  \ /
  //   D

  // {
  //   A: ['B', 'C'],
  //   B: ['A', 'D'],
  //   C: ['A', 'D'],
  //   D: ['B', 'C']
  // }

  // Initialization:

  // visited = {}
  // stack = []

  // Start with Vertex A:
  // visited = {}

  // stack = [(A, null)] (Pushing A and its parent null)

  // Pop the Stack:

  // Current node: A, Parent: null

  // Mark A as visited: visited = {A}

  // Neighbors of A are B and C. So, push both onto the stack:

  // stack = [(B, A), (C, A)]

  // Pop the Stack Again:

  // Current node: C, Parent: A

  // Mark C as visited: visited = {A, C}

  // Neighbors of C are A and D.

  // A is visited, but A is the parent of C (no cycle).

  // Push D onto the stack with C as its parent:

  // stack = [(B, A), (D, C)]

  // Pop the Stack Again:

  // Current node: D, Parent: C

  // Mark D as visited: visited = {A, C, D}

  // Neighbors of D are B and C.

  // C is visited, but C is the parent of D (no cycle).

  // Push B onto the stack with D as its parent:

  // stack = [(B, A), (B, D)]

  // Pop the Stack Again:

  // Current node: B, Parent: D

  // Mark B as visited: visited = {A, B, C, D}

  // Neighbors of B are A and D.

  // A is visited and not the parent of B (i.e., A is not D).

  // Cycle detected because we have encountered a back edge from B to A.

  // At this point, the function returns true, indicating that a cycle has been detected.

  //clone graph code ???
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log("Graph structure:");
graph.display();

console.log(graph.dfs("A"));
console.log(graph.bfs("A"));

// this.adjacencyList = {
//   A: ['B', 'C'],
//   B: ['A', 'D', 'E'],
//   C: ['A', 'F'],
//   D: ['B'],
//   E: ['B', 'F'],
//   F: ['C', 'E']
// };
