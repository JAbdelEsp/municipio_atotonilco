import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "../../styles/table.scss";

type TableProps = {
  columns: GridColDef[];
  rows: any[];
  onClickRow?: (id: string | number) => void;
};

type RowProps = {
  id: string;
  name: String;
  status?: String;
  project?: String;
};

export default function Table({ columns, rows, onClickRow }: TableProps) {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        getRowHeight={() => "auto"}
        pageSizeOptions={[10, 15, 20]}
        onRowClick={(row) => {
          onClickRow?.(row.id);
        }}
        disableDensitySelector
        disableColumnSelector
        slots={{ toolbar: GridToolbar }}
        disableRowSelectionOnClick={!onClickRow}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}
