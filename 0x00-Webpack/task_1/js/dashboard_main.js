import $ from 'jquery';
import { debounce } from 'lodash';

let count = 0;
function updateCounter() {
  $('#count').text(`${++count} clicks on the button`);
}

$(function () {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - ALX</p>');
  $('button').on('click', debounce(updateCounter, 300));
});
