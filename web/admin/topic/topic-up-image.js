var url_upload = 'https://api.cloudinary.com/v1_1/tuasnanh/image/upload#dutgkogi'; 

//make sure that the alt img of this element won't show when this page is loading
document.getElementById("getThumbnail").style.display = "none";

docReady(function () {
    // hide the thumbnail alt img
    if (document.getElementById('getThumbnail').getAttribute('src') === "") {
            document.getElementById("getThumbnail").style.display = "none";
    } else {
            document.querySelector(".upload-thumbnail").prop('required', false);
            document.getElementById("getThumbnail").style.display = "block";
    }

    //show thumbnail image when uploaded successfully
    document.querySelector(".upload-thumbnail").addEventListener("change", function (e) {
            if (document.querySelector(".upload-thumbnail").value !== "") {
                    document.getElementById('btn_upload_file').innerHTML = "Uploading...";
                    uploadFile(e, 'thumbnail'); // Cloudinary upload ==> PRETTY DONE
            }
    });

    document.getElementById('thumbnail').addEventListener("change", function() {
            console.log(document.getElementById('thumbnail').value);
            document.getElementById('btn_upload_file').innerHTML = "Upload an image";
            if(document.getElementById('thumbnail').value == "") {
                    document.getElementById('getThumbnail').style.display = "none";
            } else {
                    document.getElementById('getThumbnail').style.display = "block";
            }

            document.getElementById('getThumbnail').setAttribute('src', document.getElementById('thumbnail').value);
    });


});

function imageIsLoaded(e) {
        document.getElementById('getThumbnail').setAttribute('src', e.target.result);
};

// Cloudinary upload ==> PRETTY DONE
function uploadFile(e, target_id) {
        uploadFileCloudinary(e, url_upload, target_id);
}

function uploadFileCloudinary(e, url_upload, target_id) {
        file = e.target.files[0]; // This will get the file not file name
        var arr = url_upload.split('#');
        var url = arr[0]; // url = 'https://api.cloudinary.com/v1_1/hoagb2/image/upload';
        var xhr = new XMLHttpRequest(); // Ajax request
        var fd = new FormData(); // Ajax
        xhr.open('POST', url, true); // true = không đồng bộ, false = đồng bộ. (Mặc định là true)
        // Đồng bộ là chạy theo tuần tự
        // Không đồng bộ là chạy just like Thread => Chạy nhảy song song, bất kì
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // Prevent CSRF attacks

        xhr.onreadystatechange = function(e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                  // File uploaded successfully
                  var response = JSON.parse(xhr.responseText);
                  var url = response.secure_url; // Get url like above

                  document.getElementById(target_id).value = url; // return val(url of uploaded picture) to this element
                  // document.getElementById(target_id).onchange();
                  var event = new Event('change');
                  document.getElementById(target_id).dispatchEvent(event); // Kích hoạt sự kiện change của #thumbnail, "#tb_visual_"+id (Because '#'+target_id == '#thumbnail' or '#tb_visual_'+id)
                }
        };

        if(arr.length >= 2) {
                fd.append('upload_preset', arr[1]); // Create <input type="hidden" name="upload_preset" value="arr[1]">
        } else {
                fd.append('upload_preset', 'dutgkogi'); 
        }
        fd.append('tags', 'browser_upload'); 
        fd.append('file', file);
        xhr.send(fd);

}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}