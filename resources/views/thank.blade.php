<!-- <div>
    <h1 style="color:chartreuse;font-size:100px;">Thanking for filling the form  </h1>
    <a href="/main-page">Go to home page</a>
</div> -->

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">




<div class="container">
    <form action="/p" enctype="multipart/form-data" method="POST">
    @csrf
        <div class="row">
            <h1>Add Image</h1>
        </div>

        <div class=" form-group row align-items-start">
            <label for="image" class="col-md-4 col-form-label">{{ __('Post Image') }}</label>
            <input type="file" class="form-control-file" id="image" name="image">
            @error('image')
                <strong>{{ $message }}</strong>
            @enderror
        </div>
        <div class="mt-3">
            <button class="btn btn-primary">Add Image</button>
        </div>
    
    </form>
</div>
