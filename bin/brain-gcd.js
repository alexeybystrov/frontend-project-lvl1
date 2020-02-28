#!/usr/bin/env node
import { intro, gameEngine } from '../src/index.js';
import { task, rules } from '../src/games/gcd.js';

intro();
gameEngine(task, rules);
