#include "learnuv.h"

void idle_cb(uv_idle_t* handle) {
  static int64_t count = -1;
  count++;
  if ((count % 10000) == 0) {
    log_report(".");
    log_info(".");
  }
  if (count >= 50000) uv_idle_stop(handle);
}

int main() {
  int err;
  uv_idle_t idle_handle;
  uv_loop_t*  loop;



  /* 1. create the event loop */
  loop = uv_default_loop();
  if (loop == NULL)
    return -1;

  /* 2. initialize an idle handler for the loop */
  err = uv_idle_init( loop, &idle_handle);
  CHECK(err, "uv_idle_init");

  /* 3. start the idle handler with a function to call */
  err = uv_idle_start(&idle_handle, idle_cb);
  CHECK(err, "uv_idle_start");

  /* 4. start the event loop */
  err =  uv_run(loop,  UV_RUN_DEFAULT);
  CHECK(err, "uv_run");

  return 0;
}
