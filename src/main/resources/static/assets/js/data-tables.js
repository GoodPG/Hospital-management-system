(function($) {
  'use strict';
var dataSet = [
    [ "101" ," <img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Tiger Nixon", "tiger@123gmail.com", "5421", "Low Rider","2011/04/25", ],
    [ "102" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722","Ingrid", "2011/07/25",  ],
    [ "103" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "8422","White Widow", "2011/02/2",  ],
    ["104" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "8512", "Low Rider", "2011/11/03", ],
    [ "105" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322","Super Skunk", "2012/07/25",  ],
    [ "106" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "9565","Low Rider", "2014/02/25", ],
    [ "107" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Jenny", "jenny@123gmail.com",  "9565","Super Skunk", "2014/02/25", ],
    [ "108" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'>Bella", "bella@123gmail.com",  "5625","White Widow", "2016/08/15", ],
    ["109" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Haris", "Haris@123gmail.com",  "3525","Ingrid", "2017/10/05", ],
    [ "110" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Anny", "anny@123gmail.com",  "2321","Low Rider", "2019/05/03", ],
    [ "111" ,"<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "tiger@123gmail.com", "5421", "Low Rider","2011/04/25", ],
    [ "112" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722","Ingrid", "2011/07/25",  ],
    [ "113" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "8422","White Widow", "2011/02/2",  ],
    ["114" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'>Jhon", "Jhon@123gmail.com",  "8512", "Low Rider", "2011/11/03", ],
    [ "115" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322","Super Skunk", "2012/07/25",  ],
    [ "116" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "9565","Low Rider", "2014/02/25", ],
    [ "117" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Jenny", "jenny@123gmail.com",  "9565","Super Skunk", "2014/02/25", ],
    [ "118" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Bella", "bella@123gmail.com",  "5625","White Widow", "2016/08/15", ],
    ["119" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Haris", "Haris@123gmail.com",  "3525","Ingrid", "2017/10/05", ],
    [ "120" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Anny", "anny@123gmail.com",  "2321","Low Rider", "2019/05/03", ],
    [ "121" ,"<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "tiger@123gmail.com", "5421", "Low Rider","2011/04/25", ],
    [ "122" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722","Ingrid", "2011/07/25",  ],
    [ "123" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "8422","White Widow", "2011/02/2",  ],
    ["124" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "8512", "Low Rider", "2011/11/03", ],
    [ "125" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322","Super Skunk", "2012/07/25",  ],
    [ "126" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "9565","Low Rider", "2014/02/25", ],
    [ "127" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Jenny", "jenny@123gmail.com",  "9565","Super Skunk", "2014/02/25", ],
    [ "128" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Bella", "bella@123gmail.com",  "5625","White Widow", "2016/08/15", ],
    [ "129" ,"<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "tiger@123gmail.com", "5421", "Low Rider","2011/04/25", ],
    [ "130" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722","Ingrid", "2011/07/25",  ],
    [ "131" , " <img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'>Harry", "Harry@123gmail.com",  "8422","White Widow", "2011/02/2",  ],
    ["132" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "8512", "Low Rider", "2011/11/03", ],
    [ "133" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322","Super Skunk", "2012/07/25",  ],
    [ "134" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "9565","Low Rider", "2014/02/25", ],
    [ "135" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'>Jenny", "jenny@123gmail.com",  "9565","Super Skunk", "2014/02/25", ],
    [ "136" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'>Bella", "bella@123gmail.com",  "5625","White Widow", "2016/08/15", ]
  ];
  var dataSet1 = [
      [ "101" ," <img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Tiger Nixon", "tiger@123gmail.com", "421", "2011/04/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "102" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722","2011/07/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "103" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "8422", "2011/02/2",  "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
      ["104" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "8512",  "2011/11/03", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "105" , "<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322","2012/07/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "106" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "9565","2014/02/25","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "107" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'> Jenny", "jenny@123gmail.com",  "9565","2014/02/25","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "108" , "<img src='../../assets/img/dashboard/rakhan-potik-9.jpg' style='width:50px; height:30px;'>Bella", "bella@123gmail.com",  "5625", "2016/08/15", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      ["109" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Haris", "Haris@123gmail.com",  "3525", "2017/10/05", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "110" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Anny", "anny@123gmail.com",  "2321", "2019/05/03","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "111" ,"<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "tiger@123gmail.com", "5421", "2011/04/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "112" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722", "2011/07/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "113" , "<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "8422", "2011/02/2", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      ["114" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'>Jhon", "Jhon@123gmail.com",  "8512", "2011/11/03", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "115" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322", "2012/07/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "116" , "<img src='../../assets/img/dashboard/rakhan-potik-9.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "9565", "2014/02/25","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "117" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Jenny", "jenny@123gmail.com",  "9565", "2014/02/25","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "118" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Bella", "bella@123gmail.com",  "5625", "2016/08/15","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      ["119" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Haris", "Haris@123gmail.com",  "3525", "2017/10/05", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "120" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Anny", "anny@123gmail.com",  "2321", "2019/05/03","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "121" ,"<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "tiger@123gmail.com", "5421", "2011/04/25","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "122" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'> Garrett Winters", "Garrett@123gmail.com",  "8722", "2011/07/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
      [ "123" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "8422", "2011/02/2","<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"  ],
      ["124" , "<img src='../../assets/img/dashboard/rakhan-potik-9.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "8512",  "2011/11/03", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
      [ "125" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Henrry", "Henrry@123gmail.com",  "8322", "2012/07/25", "<a href='#'><i class='fas fa-paper-plane ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ]


      ];



    var dataSet2 = [
        [ "101" ," <img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider",  "5421", "2011/04/25" ,"2" ,"$520.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#' > <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "102" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Ingrid",   "8722", "2011/11/02", "3", "$590.50" ,"<span class='badge badge-danger'>Pending</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "103" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> White Widow",   "8422",  "2012/11/13", "1","$650.50" ,"<span class='badge badge-primary'>Paid</span>", "<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["104" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider",  "8512",  "2011/11/03","2","$450.50" ,"<span class='badge badge-warning'>Conflict</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "105" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Super Skunk", "8322","2011/1/02","3","$750.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
        [ "106" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Low Rider",   "9565", "2014/02/25","5","$950.50" ,"<span class='badge badge-danger'>Pending</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
        [ "107" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Super Skunk",   "9565", "2014/02/25","1","$100.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],
        [ "108" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'>White Widow",   "5625", "2016/08/15", "2","$150.50" ,"<span class='badge badge-danger'>Pending</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["109" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Ingrid",   "3525", "2017/10/05","5","$750.50" ,"<span class='badge badge-primary'>Paid</span>", "<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "110" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider",   "2321", "2019/05/03","2","$350.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "111" ,"<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Low Rider", "5421", "2011/04/25", "2","$150.50" ,"<span class='badge badge-warning'>Conflict</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "112" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Ingrid",   "8722", "2011/07/25","1","$850.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "113" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> White Widow",  "8422", "2011/02/2","4","$250.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        ["114" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Low Rider", "8512",  "2011/11/03","4","$450.50" , "<span class='badge badge-danger'>Pending</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>"],
        [ "115" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Super Skunk",  "8322", "2012/07/25","3","$650.50" ,"<span class='badge badge-primary'>Paid</span>","<a href='#'> <i class='fas fa-paper-plane ms-text-primary'></i><i class='far fa-trash-alt ms-text-danger'></i></a>" ],


      ];
      var dataSet3 = [
        ["101" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Anny", "anny@123gmail.com",  "2321","Low Rider","$620.50", "2019/05/03"],
        [ "102" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Hennry", "Hennry@123gmail.com",  "2321","Hemp Oil","$450.50", "2019/05/03"],
        ["103" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Haris", "Haris@123gmail.com",  "3525","Super Skunk","$850.50", "2017/10/05" ],
        ["104" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "3525","Ingrid","$650.50", "2017/10/05" ],
        ["105" , "<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Jack", "Jack@123gmail.com",  "2321","Low Rider","$320.50", "2019/05/03"],
        [ "106" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'> Bella", "Bella@123gmail.com",  "2321","Hemp Oil","$520.50", "2019/05/03"],
        ["107" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'> Alice", "Alice@123gmail.com",  "3525","UK Cheese","$550.50", "2017/10/05" ],
        ["108" , "<img src='../../assets/img/dashboard/rakhan-potik-9.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "3525","Ingrid","$450.50", "2017/10/05" ],
        ["109" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "2321","Low Rider","$220.50", "2019/05/03"],
        [ "110" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Peter", "Peter@123gmail.com",  "2321","Hemp Oil","$720.50", "2019/05/03"],
        ["111" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Anny", "anny@123gmail.com",  "2321","Low Rider","$620.50", "2019/05/03"],
        [ "112" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Hennry", "Hennry@123gmail.com",  "2321","Hemp Oil","$450.50", "2019/05/03"],
        ["113" , "<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Haris", "Haris@123gmail.com",  "3525","Super Skunk","$850.50", "2017/10/05" ],
        ["114" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'> Jhon", "Jhon@123gmail.com",  "3525","Ingrid","$650.50", "2017/10/05" ],
        ["115" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'> Jack", "Jack@123gmail.com",  "2321","Low Rider","$320.50", "2019/05/03"],
        [ "116" , "<img src='../../assets/img/dashboard/rakhan-potik-9.jpg' style='width:50px; height:30px;'> Bella", "Bella@123gmail.com",  "2321","Hemp Oil","$520.50", "2019/05/03"],
        ["117" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Alice", "Alice@123gmail.com",  "3525","UK Cheese","$550.50", "2017/10/05" ],
        ["118" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Harry", "Harry@123gmail.com",  "3525","Ingrid","$450.50", "2017/10/05" ],
        ["119" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Moris", "Moris@123gmail.com",  "2321","Low Rider","$220.50", "2019/05/03"],
        [ "120" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Peter", "Peter@123gmail.com",  "2321","Hemp Oil","$720.50", "2019/05/03"],

        ];

        var dataSet4= [
          ["101" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider","$620.50", "2019/05/03","2","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          [ "102" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Hemp Oil","$450.50", "2019/05/03","3","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["103" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Super Skunk","$850.50", "2017/10/05","4","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
          ["105" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider","$320.50", "2019/05/03","1","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["104" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Ingrid","$650.50", "2017/10/05","2","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>" ],
          [ "106" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Hemp Oil","$520.50", "2019/05/03","3","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["107" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> UK Cheese","$550.50", "2017/10/05" ,"1","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["108" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'>Ingrid","$450.50", "2017/10/05" ,"5","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["109" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Low Rider","$220.50", "2019/05/03","4","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          [ "110" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Hemp Oil","$720.50", "2019/05/03","3","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["111" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Low Rider","$620.50", "2019/05/03","1","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          [ "112" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Hemp Oil","$450.50", "2019/05/03","6","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["113" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Super Skunk","$850.50", "2017/10/05" ,"2","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["114" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Ingrid","$650.50", "2017/10/05" ,"4","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["115" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Low Rider","$320.50", "2019/05/03","2","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          [ "116" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'>Hemp Oil","$520.50", "2019/05/03","3","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["117" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> UK Cheese","$550.50", "2017/10/05" ,"1","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["118" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Ingrid","$450.50", "2017/10/05" ,"2","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          ["119" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider","$220.50", "2019/05/03","4","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],
          [ "120" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'>Hemp Oil","$720.50", "2019/05/03","3","<a href='#'><i class='fas fa-pencil-alt ms-text-primary'></i> <i class='far fa-trash-alt ms-text-danger'></i></a>"],

          ];
          var dataSet5 = [
              [ "101" ," <img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "Low Rider","2011/04/25", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "102" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Garrett Winters", "Ingrid", "2011/07/25",  "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "103" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Harry", "White Widow", "2011/02/2",  "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              ["104" , "<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Jhon", "Low Rider", "2011/11/03", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "105" , "<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Henrry", "Super Skunk", "2012/07/25",  "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "106" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'> Moris", "Low Rider", "2014/02/25", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "107" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'> Jenny", "Super Skunk", "2014/02/25","<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>" ],
              [ "108" , "<img src='../../assets/img/dashboard/rakhan-potik-1.jpg' style='width:50px; height:30px;'>Bella", "White Widow", "2016/08/15", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              ["109" , "<img src='../../assets/img/dashboard/rakhan-potik-2.jpg' style='width:50px; height:30px;'> Haris","Ingrid", "2017/10/05", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "110" , "<img src='../../assets/img/dashboard/rakhan-potik-3.jpg' style='width:50px; height:30px;'> Anny", "Low Rider", "2019/05/03", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "111" ,"<img src='../../assets/img/dashboard/rakhan-potik-4.jpg' style='width:50px; height:30px;'> Tiger Nixon",  "Low Rider","2011/04/25", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "112" , "<img src='../../assets/img/dashboard/rakhan-potik-5.jpg' style='width:50px; height:30px;'> Garrett Winters", "Ingrid", "2011/07/25","<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"  ],
              [ "113" , "<img src='../../assets/img/dashboard/rakhan-potik-7.jpg' style='width:50px; height:30px;'> Harry", "White Widow", "2011/02/2", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>" ],
              ["114" , "<img src='../../assets/img/dashboard/rakhan-potik-8.jpg' style='width:50px; height:30px;'>Jhon", "Low Rider", "2011/11/03", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
              [ "115" , "<img src='../../assets/img/dashboard/rakhan-potik-9.jpg' style='width:50px; height:30px;'> Henrry","Super Skunk", "2012/07/25","<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"  ]
            ];
            var dataSet6 = [
                [ "101" ," <img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider","Defective Product","2011/04/25", "2011/04/25", "2011/04/25", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "102" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Ingrid","Late Delivery", "2011/04/25", "2011/04/25", "2011/07/25",  "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "103" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> White Widow","Damaged Item","2011/04/25", "2011/04/25",  "2011/02/2",  "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                ["104" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Low Rider", "Wrong Product","2011/04/25", "2011/04/25", "2011/11/03", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "105" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Super Skunk","Defective Product","2011/04/25", "2011/04/25",  "2012/07/25",  "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "106" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Low Rider","Wrong Product","2011/04/25", "2011/04/25",  "2014/02/25", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "107" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'> Super Skunk","Late Delivery", "2011/04/25", "2011/04/25", "2014/02/25","<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>" ],
                [ "108" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'>White Widow","Damaged Item", "2011/04/25", "2011/04/25", "2016/08/15", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                ["109" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'> Ingrid","Defective Product", "2011/04/25", "2011/04/25", "2017/10/05", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "110" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'>Low Rider","Wrong Product", "2011/04/25", "2011/04/25", "2019/05/03", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "111" ,"<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'> Low Rider","Late Delivery","2011/04/25", "2011/04/25", "2011/04/25", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "112" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'>Ingrid", "Defective Product","2011/04/25", "2011/04/25", "2011/07/25","<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"  ],
                [ "113" , "<img src='../../assets/img/dashboard/product-1.jpg' style='width:50px; height:30px;'>White Widow", "Damaged Item","2011/04/25", "2011/04/25", "2011/02/2", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>" ],
                ["114" , "<img src='../../assets/img/dashboard/product-2.jpg' style='width:50px; height:30px;'>Low Rider", "Defective Product","2011/04/25", "2011/04/25", "2011/11/03", "<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"],
                [ "115" , "<img src='../../assets/img/dashboard/product-3.jpg' style='width:50px; height:30px;'>Super Skunk","Late Delivery", "2011/04/25", "2011/04/25", "2012/07/25","<a href='#'><i class='far fa-trash-alt ms-text-danger ml-3'></i></a>"  ]
              ];

  var tableOne = $('#data-table-1').DataTable( {
    data: dataSet,
    columns: [
      { title: "Name" },
      { title: "Position" },
      { title: "Office" },
      { title: "Extn." },
      { title: "Start date" },
      { title: "Salary" }
    ],
  });
  var tableTwo = $('#data-table-2').DataTable( {
    data: dataSet3,
    columns: [
      { title: "Id" },
      { title: "User Name" },
      { title: "Email Id" },

      { title: "Order Id" },
      { title: "Product Name" },
          { title: "Price" },
      { title: "Date" }
    ],
  });
  var tableThree = $('#data-table-3').DataTable( {
    data: dataSet,
    columns: [
      { title: "Id" },
      { title: "Customer Name" },
      { title: "Email Id" },
      { title: "Product Id" },
      { title: "Product Name" },
      { title: "Date" },
    

    ],

  });

  var tableFour = $('#data-table-4').DataTable( {
    data: dataSet6,
    columns: [
      { title: "Id" },
      { title: "Product Name" },
      { title: "Return Issue" },
      { title: "Return Date" },
      { title: "Dispatch Date" },
      { title: "Date" },
      { title:"Action"}

    ],
  });
  var tableFive = $('#data-table-5').DataTable( {
    data: dataSet5,
    columns: [
      { title: "Id" },
      { title: "Customer Name" },

      { title: "Product Name" },
      { title: "Cancel Date" },
      { title: "Action" }
    ],
  });
  var tableThree = $('#data-table-6').DataTable( {
    data: dataSet1,
    columns: [
      { title: "Id" },
      { title: "Customer Name" },
      { title: "Email Id" },
      { title: "No. Of Purchase" },
      { title: "Member Since" },

      { title: "Action" }

    ],

  });

  var tableThree = $('#data-table-7').DataTable( {
    data: dataSet2,
    columns: [
      { title: "Invoice Id" },
      { title: "Product Name" },
      { title: "Order Id" },
      { title: "Invoice Generate Date" },
      { title: "Qty" },
      { title: "Price" },
        { title: "Status" },
      { title: "Action" }

    ],

  });
  var tableThree = $('#data-table-8').DataTable( {
    data: dataSet4,
    columns: [
      { title: "Id" },
      { title: "Product Name" },

      { title: "Product Price" },
      { title: "Date" },
      { title: "No. Of Purchase" },
      { title: "Action" }

    ],

  });
})(jQuery);
