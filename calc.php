<?php

// Правильно вывести формулу мне не удалось,поэтому результат вывода 0


header("Content-Type: application/json");

$data = $_POST;
$summn = intval($_POST['form__input--amount']);
$summadd = intval($_POST['form__input--replenishment-amount']);


$percent = 10;
$daysM = 30;
$daysY = 365;


$summn = 0 + (0 + $summadd) * $daysM * ($percent / $daysY);


// Данное решение подсмотрел в интернете и переделал под свои нужды.
  echo json_encode(['success' => true, 'value' => number_format($summn).' руб'])
?>