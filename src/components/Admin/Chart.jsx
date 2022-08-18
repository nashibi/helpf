import React from "react";
import Paper from '@material-ui/core/Paper';
import DonutChart from "react-donut-chart";
import Chart from 'react-google-charts';
import { ThemeProvider } from "@material-ui/styles";

  

export default function Chartx() {
 
    return (
        <div style={{
            backgroundColor:'#e12212',
            borderBottom:12,
            justifyContent:'center',
            alignItems:'center',
            paddingTop:25,
            
           
            
        }}>
          <DonutChart 
          
        data={[
          {
            label: "Validasi Usulan",
            value: 12
          },
          {
            label: "Paraf Pertek",
            value: 25
          },
          {
            label: "Surat Keputusan",
            value: 50
          },
          {
            label: "",
            value: 0,
            isEmpty: true
          }
        ]}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          
          
        }}
        width={100}
        backgroundColor={'F6F268'}
        emptyColor={'3f10000'}
        
        
      />
        </div>
      );
}
  
