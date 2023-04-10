import ListTransaction from "./ListTransaction";

const Transaction = ({ transactions }) => {
  return (
    <section id="transaction">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4" id="pemasukan">
            <h2 className="fw-light mb-3 text-center">Pemasukan</h2>
            <hr className="w-75 mx-auto mb-4" />
            {transactions.map(
              (transaction) =>
                transaction.nominal > 0 && (
                  <ListTransaction
                    key={transaction.id}
                    id={transaction.id}
                    tanggal={transaction.tanggal}
                    keterangan={transaction.keterangan}
                    nominal={transaction.nominal}
                  />
                )
            )}
          </div>

          <div className="col-lg-6 mb-4" id="pelanggan">
            <h2 className="fw-light text-center mb-3">Pengeluaran</h2>
            <hr className="w-75 mx-auto mb-4" />
            {transactions.map(
              (transaction) =>
                transaction.nominal <= 0 && (
                  <ListTransaction
                    key={transaction.id}
                    id={transaction.id}
                    tanggal={transaction.tanggal}
                    keterangan={transaction.keterangan}
                    nominal={transaction.nominal}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
