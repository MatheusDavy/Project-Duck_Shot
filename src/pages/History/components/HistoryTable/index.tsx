import { TableContainer, TdContainer } from "./styles";

interface HistoryProps {
    id: string
    pointers: number
    mode: string
    data: string
}{}

interface HistoryTableProps {
    historyDatas: HistoryProps[]
}

export function HistoryTable({historyDatas}: HistoryTableProps) {
    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Pointers</th>
                    <th>Mode</th>
                    <th>Date</th>

                </tr>
            </thead>
            <tbody>
                {historyDatas && 
                    historyDatas.map((datas: any)=>{
                            return (
                                <tr key={datas.id}>
                                    <TdContainer>{datas.pointers}</TdContainer>
                                    <TdContainer mode={datas.mode}>{datas.mode}</TdContainer>
                                    <TdContainer>{datas.data}</TdContainer>
                                </tr>
                            )
                    })
                }
            </tbody>
        </TableContainer>
    )
}