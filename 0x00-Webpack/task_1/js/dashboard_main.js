import $ from 'jquery';
import _ from 'lodash';

const updateCounter = () => {
  let times = 0;
  $('button').on('click', () => $('#count').html(`${++times} clicks on the button`));
};

$(function () {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - ALX</p>');

  updateCounter();
  _.debounce(updateCounter, 500);
});
