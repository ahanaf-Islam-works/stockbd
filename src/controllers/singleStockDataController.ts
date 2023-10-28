// fetch single stock data from API

import { TRPCError } from "@trpc/server";
// { "Meta Data": { "1. Information": "Intraday (5min) open, high, low, close prices and volume", "2. Symbol": "IBM", "3. Last Refreshed": "2023-10-27 19:35:00", "4. Interval": "5min", "5. Output Size": "Compact", "6. Time Zone": "US/Eastern" },

interface MetaData {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Interval": string;
    "5. Output Size": string;
    "6. Time Zone": string;
}

interface InputData {
    [key: string]: {
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
    };
}
interface OutputData {
    x: Date;
    y: [number, number, number, number];
}

function convertData(inputData: InputData): OutputData[] {
    const outputData: OutputData[] = [];

    for (const timestamp in inputData) {
        const entry = inputData[timestamp];
        const date = new Date(timestamp);
        const open = parseFloat(entry["1. open"]);
        const high = parseFloat(entry["2. high"]);
        const low = parseFloat(entry["3. low"]);
        const close = parseFloat(entry["4. close"]);

        outputData.push({
            x: date,
            y: [open, high, low, close]
        });
    }

    return outputData;
}

export const singleStockDataController = async (symbol: string ) => {
    try{
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=demo`)
        if (!response) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        const data = await response.json();
        
        const result = !data ?  new TRPCError({ code: "INTERNAL_SERVER_ERROR" }) : data;
        const timeSeries = result["Time Series (5min)"];
        const output = convertData(timeSeries);
        const metaData: MetaData = result["Meta Data"];
        return {output, metaData};
    }   catch (error) {
        console.error(error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
}