import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let count = 0;
  $('button').on(
    'click',
    _.debounce(() => $('#count').html(`${++count} clicks on the button`), 300),
  );
}

$(function () {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - ALX</p>');
  updateCounter();
});
