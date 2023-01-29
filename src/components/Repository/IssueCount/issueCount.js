import { useState } from "react";
import React from "react";
import Chart from "../chart";
import { useEffect } from "react";
import axios from "axios";

export default function CodeFrequency(props) {
  const [option, setOption] = useState(null);
  useEffect(() => {
    // axios
    //   .get(`${props.backend_url}issue_count/${props.repo}`)
    //   .then((props) => {
        if (!props.data) {
            return;
          }
        props.data.tooltip = {
            trigger: "axis",
        }

        props.data.legend = {
            "top": '5%',
            "left": 'center'
        }
        
        for (let i = 0; i < props.data.series.length; i++) {
            
            const addVal = {
                "name": 'Issue Count',
                "type": 'pie',
                "radius": ['40%', '70%'],
                "avoidLabelOverlap": false,
                "itemStyle": {
                    "borderRadius": 10,
                    "borderColor": '#fff',
                    "borderWidth": 2
                },
                "label": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "label": {
                    "show": true,
                    "fontSize": 15,
                    "fontWeight": 'bold'
                    }
                },
                "labelLine": {
                    "show": false
                }
            }
            Object.assign(props.data.series[i], addVal)
        }
        setOption(props.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [props.data]);

  return (
    <div>
          <Chart option={option} loading={option ? false : true} />
    </div>  );
}
