import { LevelOne } from "@/models/Tables";

export default async function Record1() {
  const level1 = await LevelOne.find({}, null, {
    sort: { _id: -1 },
  });
  return (
    <>
      <div
        class="modal fade"
        id="record"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content c-modal">
            {/** Header */}
            <div class="modal-header">
              <div class="topic text-center">
                <h2>100 Level Records.</h2>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/** Modal Body */}
            <div class="modal-body">
              <div className="row justify-content-center align-items-center">
                <div className="card  mt-3">
                  {level1.map((l1) => (
                    <div className="card-body">
                      <p>{l1.matric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
