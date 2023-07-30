"use strict";var contactName=document.querySelector("#contact-name"),contactPhone=document.querySelector("#contact-phone"),contactEmail=document.querySelector("#contact-email"),contactTextarea=document.querySelector("#contact-msg"),contactSendBtn=document.querySelector(".contact-btn"),contactClearBtn=document.querySelector(".contact-clear-btn"),allInputs=document.querySelectorAll(".contact-label"),allContactItems=document.querySelectorAll(".contact-item"),contactPopup=document.querySelector(".contact-popup"),checkInputs=function(t){t.forEach(function(t){(""===t.value?declineMsg:clearDecline)(t)})},declineMsg=function(t){t.parentElement.classList.add("decline")},clearDecline=function(t){t.parentElement.classList.remove("decline")},emailVerification=function(t){(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i.test(t.value)?clearDecline:declineMsg)(t)},sendContactForm=function(){var c=0;allContactItems.forEach(function(t){t.classList.contains("decline")&&c++}),0===c&&contactPopup.classList.add("show-popup-msg")};contactClearBtn.addEventListener("click",function(t){t.preventDefault(),allInputs.forEach(function(t){t.value=""}),allContactItems.forEach(function(t){t.classList.remove("decline")})}),contactSendBtn.addEventListener("click",function(t){t.preventDefault(),checkInputs([contactName,contactPhone,contactEmail,contactTextarea]),emailVerification(contactEmail),sendContactForm()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuanMiXSwibmFtZXMiOlsiY29udGFjdE5hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWN0UGhvbmUiLCJjb250YWN0RW1haWwiLCJjb250YWN0VGV4dGFyZWEiLCJjb250YWN0U2VuZEJ0biIsImNvbnRhY3RDbGVhckJ0biIsImFsbElucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWN0UG9wdXAiLCJpbnB1dHMiLCJjaGVja0lucHV0cyIsImlucHV0IiwiZm9yRWFjaCIsImRlY2xpbmVNc2ciLCJjbGVhckRlY2xpbmUiLCJ2YWx1ZSIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWN0SXRlbSIsInJlbW92ZSIsInJlIiwiZW1haWwiLCJ0ZXN0Iiwic2VuZENvbnRhY3RGb3JtIiwiZGVjbGluZXMiLCJhbGxDb250YWN0SXRlbXMiLCJpdGVtIiwiY29udGFpbnMiLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiZW1haWxWZXJpZmljYXRpb24iXSwibWFwcGluZ3MiOiJhQUFBLElBQU1BLFlBQWNDLFNBQVNDLGNBQWMsZUFBZSxFQUNwREMsYUFBZUYsU0FBU0MsY0FBYyxnQkFBZ0IsRUFEdERGLGFBQWNDLFNBQVNDLGNBQWMsZ0JBQWdCLEVBQ3JEQyxnQkFBZUYsU0FBU0MsY0FBYyxjQUFpQixFQUN2REUsZUFBZUgsU0FBU0MsY0FBYyxjQUFpQixFQUN2REcsZ0JBQWtCSixTQUFTQyxjQUFjLG9CQUFlLEVBQ3hESSxVQUFjTCxTQUFHQSxpQkFBdUIsZ0JBQWUsRUFDdkRNLGdCQUFrQk4sU0FBU0MsaUJBQWMsZUFBb0IsRUFDN0RNLGFBQVlQLFNBQVNRLGNBQWlCLGdCQUFpQixFQUV2REMsWUFBZVQsU0FBQUEsR0FFckJVLEVBQU1DLFFBQVcsU0FBQUMsSUFDRCxLQUFmRixFQUFPRyxNQUVMQyxXQUVBQyxjQUhTQyxDQUFLLENBS2hCLENBQUMsQ0FDRixFQUVNRixXQUFhLFNBQUFGLEdBQ0VBLEVBQU1LLGNBQ2ZDLFVBQVVDLElBQUksU0FBQyxDQUMzQixFQUdPQyxhQUFjUixTQUFBQSxHQUNSTSxFQUFVRyxjQUN0QkgsVUFBQUcsT0FBQSxTQUFBLENBRUQsRUFJS0Msa0JBQW9CLFNBQUFDLElBRXhCLHdIQUVBQyxLQUFBRCxFQUFBUCxLQUFBLEVBQ0FELGFBR0FELFlBSEFTLENBQUEsQ0FBRCxFQVFFRSxnQkFBQSxXQUxELElBTUVDLEVBQUEsRUFKRkMsZ0JBT29CVCxRQUFBQSxTQUFBQSxHQUNqQlUsRUFBQVYsVUFBQVcsU0FBQSxTQUFBLEdBQ0hILENBQUEsRUFMQSxDQVFBSSxFQUVpQixJQUFoQmxCLEdBQ0NILGFBQUFTLFVBQUFDLElBQUEsZ0JBQUEsQ0FOSCxFQVdBYixnQkFBRXlCLGlCQUFBLFFBQUEsU0FBQUQsR0FFRnpCLEVBQUFBLGVBQWUwQixFQVRkeEIsVUFVRXlCLFFBQWUsU0FBQXBCLEdBQ2pCRCxFQUFBQSxNQUFhWixFQVRiLENBVUFrQyxFQUVBTixnQkFBQ2QsUUFBQSxTQUFBZSxHQVRBQSxFQUFLVixVQUFVRyxPQUFPLFNBQVMsQ0FDaEMsQ0FBQyxDQUNGLENBQUMsRUFFRGhCLGVBQWUwQixpQkFBaUIsUUFBUyxTQUFBRCxHQUN4Q0EsRUFBRUUsZUFBZSxFQUNqQnJCLFlBQVksQ0FBQ1osWUFBYUcsYUFBY0MsYUFBY0MsZ0JBQWdCLEVBQ3RFNkIsa0JBQWtCOUIsWUFBWSxFQUM5QnNCLGdCQUFnQixDQUNqQixDQUFDIiwiZmlsZSI6ImNvbnRhY3QubWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtbmFtZScpXHJcbmNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LXBob25lJylcclxuY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtZW1haWwnKVxyXG5jb25zdCBjb250YWN0VGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1tc2cnKVxyXG5jb25zdCBjb250YWN0U2VuZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ0bicpXHJcbmNvbnN0IGNvbnRhY3RDbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWNsZWFyLWJ0bicpXHJcbmNvbnN0IGFsbElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0LWxhYmVsJylcclxuY29uc3QgYWxsQ29udGFjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtaXRlbScpXHJcbmNvbnN0IGNvbnRhY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXBvcHVwJylcclxuXHJcbmNvbnN0IGNoZWNrSW5wdXRzID0gaW5wdXRzID0+IHtcclxuXHRpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcblx0XHRpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdGRlY2xpbmVNc2coaW5wdXQpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjbGVhckRlY2xpbmUoaW5wdXQpXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuY29uc3QgZGVjbGluZU1zZyA9IGlucHV0ID0+IHtcclxuXHRjb25zdCBjb250YWN0SXRlbSA9IGlucHV0LnBhcmVudEVsZW1lbnRcclxuXHRjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdkZWNsaW5lJylcclxufVxyXG5cclxuY29uc3QgY2xlYXJEZWNsaW5lID0gaW5wdXQgPT4ge1xyXG5cdGNvbnN0IGNvbnRhY3RJdGVtID0gaW5wdXQucGFyZW50RWxlbWVudFxyXG5cdGNvbnRhY3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RlY2xpbmUnKVxyXG59XHJcblxyXG5jb25zdCBlbWFpbFZlcmlmaWNhdGlvbiA9IGVtYWlsID0+IHtcclxuXHRjb25zdCByZSA9XHJcblx0XHQvXigoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsM30pJC9pXHJcblxyXG5cdGlmIChyZS50ZXN0KGVtYWlsLnZhbHVlKSkge1xyXG5cdFx0Y2xlYXJEZWNsaW5lKGVtYWlsKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRkZWNsaW5lTXNnKGVtYWlsKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc2VuZENvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG5cdGxldCBkZWNsaW5lcyA9IDBcclxuXHJcblx0YWxsQ29udGFjdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2RlY2xpbmUnKSkge1xyXG5cdFx0XHRkZWNsaW5lcysrXHJcblx0XHR9XHJcblx0fSlcclxuXHJcbiAgICBpZihkZWNsaW5lcyA9PT0gMCl7XHJcbiAgICAgICAgY29udGFjdFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3ctcG9wdXAtbXNnJylcclxuICAgIH1cclxufVxyXG5cclxuY29udGFjdENsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0YWxsSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG5cdFx0aW5wdXQudmFsdWUgPSAnJ1xyXG5cdH0pXHJcblxyXG5cdGFsbENvbnRhY3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkZWNsaW5lJylcclxuXHR9KVxyXG59KVxyXG5cclxuY29udGFjdFNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRjaGVja0lucHV0cyhbY29udGFjdE5hbWUsIGNvbnRhY3RQaG9uZSwgY29udGFjdEVtYWlsLCBjb250YWN0VGV4dGFyZWFdKVxyXG5cdGVtYWlsVmVyaWZpY2F0aW9uKGNvbnRhY3RFbWFpbClcclxuXHRzZW5kQ29udGFjdEZvcm0oKVxyXG59KVxyXG4iXX0=
