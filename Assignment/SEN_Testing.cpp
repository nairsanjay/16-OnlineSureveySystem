#include<bits/stdc++.h>

using namespace std;

int arr[]={31,28,31,30,31,30,31,31,30,31,30,31};


int isleap(int year)
{
    if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
      return 1;
   else
      return 0;
}



int main()
{
    int date,month,year;
    while(1)
    {


    cout<<"Enter Day: ";
    cin>>date;
    cout<<"Enter Month: ";
    cin>>month;
    cout<<"Enter Year ";
    cin>>year;

    if(date<1||date>31||month<1||month>12||year<1900||year>2015)
    {
        cout<<"invalid";
        return 0;
    }


    if(date!=1)
    {
        cout<<date-1<<" "<<month<<" "<<year<<endl;
    }
    else if(month!=1)
    {
        if(month-1==2&&isleap(year)==0)
        {
            month=month-1;
            date=28;
        }
        else if(month-1==2&&isleap(year)==1)
        {
            month=month-1;
            date=29;
        }
        else
        {
            month=month-1;
            date=arr[month-1];
        }
    }
    else
    {
        year=year-1;
        date=31;
        month=12;
    }
    cout<<date<<" "<<month<<" "<<year<<endl;

    }

    return 0;
}
