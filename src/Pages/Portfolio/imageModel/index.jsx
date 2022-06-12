import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  borderRadius: "5px",
};

export default function ImageModel({ open, handleClose, imageData }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={() => {
              handleClose();
            }}
            size="small"
            variant="outlined"
            color="secondary"
            sx={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
            }}
          >
            <CloseIcon sx={{ fontSize: "38px" }} />
          </Button>

          <Box
            component={"img"}
            src={imageData.img}
            sx={{
              width: "100%",
              height: "100%",
              p: 1,
            }}
          />
        </Box>
      </Modal>
    </>
  );
}
