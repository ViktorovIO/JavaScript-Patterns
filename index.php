<?php

require 'vendor/autoload.php';

use Acme\Users\Person;
use Acme\Business;
use Acme\Staff;
use Acme\Stack;

// $jeffrey = new Person('Jeffrey Way');
// $staff = new Staff([$jeffrey]);
// $laracasts = new Business($staff);
// $laracasts->hire(new Person('Jane Doe'));
//
// $viktorov = new Person('Igor Viktorov');
// $studenikin = new Person('Vladimir Studenikin');
//
// $softstaff = new Staff([$viktorov, $studenikin]);
// $sitesoft = new Business($softstaff);
//
// var_dump($laracasts->getStaffMembers());
// var_dump($sitesoft->getStaffMembers());

// ******************************************************************

// $myBooks = new Stack();
//
// $myBooks->push('A Dream of Spring') . "\n";
// $myBooks->push('The Winds of Winter') . "\n";
// $myBooks->push('A Dance with Dragons') . "\n";
// $myBooks->push('A Feast for Crows') . "\n";
// $myBooks->push('A Storm of Swords') . "\n";
// $myBooks->push('A Clash of Kings') . "\n";
// $myBooks->push('A Game of Thrones') . "\n";
//
// echo $myBooks->pop();
// echo $myBooks->pop();
// echo $myBooks->pop();
//
// echo $myBooks->top();

$myQueue = new SplQueue();

$myQueue->enqueue('A Game of Thrones');
$myQueue->enqueue('A Clash of Kings');
$myQueue->enqueue('A Storm of Swords');

echo $myQueue->dequeue() . "\n";
echo $myQueue->dequeue() . "\n";
echo $myQueue->bottom() . "\n";
