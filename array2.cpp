#include<iostream>
using namespace std;
int main()
{
	float a[10],n,sum=0;
	cout<<"enter size of array";
	cin>>n;
	for(int i=0;i<n;i++)
	{
		cout<<"enter element"<<i+1<<": ";
		cin>>a[i];
		sum=sum+a[i];
	}
	cout<<"array is: "<<sum/n;
}
