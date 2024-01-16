import { LevelTwo } from "@/models/Tables";

export default async function Record2() {
  const level2 = await LevelTwo.find({}, null, {
    sort: { _id: -1 }
  });

  return (
    <>
      <div
        class="modal fade"
        id="record2"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content c-modal">
            {/** Header */}
            <div class="modal-header">
              <div class="topic text-center">
                <h2>200 Level Records.</h2>
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
                  {level2.map((l2) => (
                    <div className="card-body">
                      <p>{l2.matric}</p>
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
