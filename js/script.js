// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const base = parseFloat(document.getElementById('base-of-triangle').value)
  const height = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}