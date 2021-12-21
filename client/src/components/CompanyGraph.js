import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

export default class CompanyGraph extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <h4>{this.props.selectedCompanySymbol} - {this.props.selectedCompanyName}</h4>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={this.props.selectedCompanyData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="settlement_date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={this.props.selectedCompanyData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="settlement_date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="quantity" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
