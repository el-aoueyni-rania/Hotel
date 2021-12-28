import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hotel',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Hotel La Cigale Tabarka'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.indigoAccent,
      ),

      body:GridView.count(
        mainAxisSpacing: 10,
        crossAxisSpacing: 10,
        childAspectRatio: 0.9,
        crossAxisCount: 2,
          children: [
                  Card(
                    child: Column(
                      children: [
                        Image(image: AssetImage('images/chm4.jpg'),),
                        ListTile(
                          title: Text("Chambres et suites",textDirection: TextDirection.ltr,style: TextStyle(fontWeight: FontWeight.bold)),
                        ),
                      ],
                    ),
          ),
            Card(
              child: Column(
                children: [
                  Image(image: AssetImage('images/rest3.png'),),
                  ListTile(
                    title: Text("Restaurants et Bars",textDirection: TextDirection.ltr,style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),

            Card(
              child: Column(
                children: [
                  Image(image: AssetImage('images/reun.png'),),
                  ListTile(
                    title: Text("Réunions et Evenements",textDirection: TextDirection.ltr,style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),
            Card(
              child: Column(
                children: [
                  Image(image: AssetImage('images/spa3.jpg'),),
                  ListTile(
                    title: Text("Thalasso et SPA",textDirection: TextDirection.ltr,style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),
            Card(
              child: Column(
                children: [
                  Image(image: AssetImage('images/golf4.jpg'),),
                  ListTile(
                    title: Text("Golf",textDirection: TextDirection.ltr,style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),
            Card(
              child: Column(
                children: [
                  Image(image: AssetImage('images/stade.png'),),
                  ListTile(
                    title: Text("Complexe Sportif",textDirection: TextDirection.ltr,style: TextStyle(fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),
        ],),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
      bottomNavigationBar: new Theme(
    data: Theme.of(context).copyWith(
    canvasColor: Colors.indigoAccent,),
    child: new BottomNavigationBar(
    type: BottomNavigationBarType.fixed,
    currentIndex: 0,
        items: [
        BottomNavigationBarItem(icon: Icon(Icons.home , color: Colors.white), label: 'Home'),
        BottomNavigationBarItem(icon: Icon(Icons.account_circle , color: Colors.white), label: 'Users'),
        BottomNavigationBarItem(icon: Icon(Icons.add , color: Colors.white), label: 'Reservations'),
        BottomNavigationBarItem(icon: Icon(Icons.local_activity , color: Colors.white), label: 'Activities'),
        BottomNavigationBarItem(icon: Icon(Icons.restaurant , color: Colors.white), label: 'Restaurants'),
      ],
    ),
      ),
    );
  }
}
