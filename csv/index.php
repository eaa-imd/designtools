<?php

/*
 CSV Processor:

 The puropse of this file is to load a CSV file, and output JSON code for visualization.
 Code structure:

 var dataArray = [
  [ 'Adobe XD', 6  ],
  [ 'Axure',   2  ],
  [ 'Balsamiq',   3 ],
  [ 'Adobe XD',   7 ],
];

 
*/

  function load_csv( $file_id ) {
  
  if (($handle = fopen($file_id, "r")) == false) {

    echo '<p>To load CSV file: place file named "file.csv" in this directory.</p>';
    return;
  }

  $csv = array_map(function($d) {
    return str_getcsv($d, ";");
  }, file("file.csv"));

  // array_shift($csv);

  foreach ($csv as $i=>$row) {
    $csvRows[$i] = $row;
  }
  
  return $csvRows;

}

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSV Parser</title>
    <style>
    
    body {
      margin: 0;
      padding: 1em;
      font-family: 'Source Sans Pro', sans-serif;
      background: linear-gradient(90deg, #9CFFC5 0%, #BEDCFF 100%);
      color: #403D85;

    }

    h1{
      font-weight: 400;
    }

    </style>
  </head>
  <body>
    <div class="main">
      
     
      <?php

      /* Load the CSV */

      $csv = load_csv('file.csv');

      $questions = count($csv[0]);
      echo 'Nombre de questions: '.$questions.'</br>';

      $participants = count($csv);
      // soustraire 1, pour ne pas compter le titre de la colonne.
      echo 'Nombre de participants: '. ($participants - 1) .'</br></br>';

      // on produit notre array $data:

      for ($q = 0; $q < $questions; $q++) {

        for ($p = 0; $p < $participants; $p++) {

          // separated by comma
          $myArray = explode(',', $csv[$p][$q]);

          foreach($myArray as $my_Array){

            $my_Array = trim($my_Array);
            if (!empty($my_Array)) {
              $data[$q][] = $my_Array;
            }
          }
        } 
      }

      // on affiche les données:

      for ($q = 0; $q < $questions; $q++) {

        echo '<h2>'.$data[$q][0].'</h2>';

        echo '<pre>';

        array_shift($data[$q]); // Remove title

        $output = $data[$q];

        $output = array_count_values($output);

        // Array is now grouped by values.

        echo 'var dataArray = [ <br>';
          foreach ($output as $key => $value){
            echo "  [ '".$key."', ".$value."],<br>";
          }
          // [ 'Adobe XD', 6  ],
          // [ 'Axure',   2  ],
        echo '];';

        // var_dump($output);

        echo '</pre>';

      }



      ?>
      <script>
      
      </script>
    </div>
  </body>
</html>
