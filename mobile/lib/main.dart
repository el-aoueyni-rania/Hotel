import 'package:flutter/material.dart';
import 'package:mobile/home.dart';
import 'package:mobile/reservation.dart';
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


int _currentIndex=0;
final List<Widget> _children =[
  home(),
  reservation()

];

void onTappedBar(int index){

  setState(() {
    _currentIndex = index;
  });
}

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.indigoAccent,
      ),

      body:_children[_currentIndex],
      bottomNavigationBar: new Theme(
    data: Theme.of(context).copyWith(
    canvasColor: Colors.indigoAccent,),
    child: new BottomNavigationBar(
    type: BottomNavigationBarType.fixed,
        onTap: onTappedBar,
        currentIndex: _currentIndex,
        items: [
        BottomNavigationBarItem(icon: Icon(Icons.home , color: Colors.white), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.add , color: Colors.white), label: 'Reservations'),

          BottomNavigationBarItem(icon: Icon(Icons.account_circle , color: Colors.white), label: 'Users'),
        BottomNavigationBarItem(icon: Icon(Icons.local_activity , color: Colors.white), label: 'Activities'),
        BottomNavigationBarItem(icon: Icon(Icons.restaurant , color: Colors.white), label: 'Restaurants'),
      ],
    ),
      ),
    );
  }
}

