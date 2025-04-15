#include <iostream>
using namespace std;

int main(){
    int n1,n2,ans;
    char plus,min,times,div,choice;
    plus = '+';
    min = '-';
    times = '*';
    div = '/';

    cout<< "enter first number: ";
    cin >> n1;

    cout<< "enter second number: ";
    cin >> n2;

    cout<< "enter operation" << endl;
    cout<< "+" << endl;
    cout<< "-" << endl;
    cout<< "*" << endl;
    cout<< "/" << endl;
    cin >> choice;

    switch (choice)
    {
    case '+':
        ans = n1+n2;
        cout<<ans;
        break;
    case '-':
        ans = n1-n2;
        cout<<ans;
        break;
    case '*':
        ans = n1*n2;
        cout<<ans;
        break;
    case '/':
        ans = n1/n2;
        cout<<ans;
        break;
    default:
        cout << "bonak";
        break;
    }



    return 0;
}
