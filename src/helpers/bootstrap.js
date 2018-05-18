import path from "path";
import dotenv from "dotenv";
import express from 'express';
import phantomjs from "phantomjs-prebuilt"; 
import jsonfile from "jsonfile";
import fs from "fs";
import utils from "./utils.js";
 

global.path = path;
global.dotenv = dotenv; 
global.express = express;
global.phantomjs = phantomjs;
global.jsonfile = jsonfile;
global.fs = fs; 

utils.loadENV(); 

global.utils = utils;
 