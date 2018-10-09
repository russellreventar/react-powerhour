import React from 'react';

const FakeComponentTree = () => <Node1/>
const Node1 = () => <Node2/>
const Node2 = () => <Node3/>
const Node3 = () => <Node4/>
const Node4 = () => <Node5/>
const Node5 = () => <div></div>

export default FakeComponentTree;