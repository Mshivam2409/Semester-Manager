Get-ChildItem -Recurse | foreach { Move-Item $_ $_.Name.Replace(".js", ".ts") }
Get-ChildItem | foreach { tsc --declaration $_.Name  }
Remove-Item index.d.ts; 
Get-ChildItem -Path *.d.ts -Exclude "Index.d.ts" | `
  foreach { Get-Content $_ } | `
  where { !$_.ToString().StartsWith("import") } | `
  foreach { $_.Replace("export default", "export") } | `
  foreach { Add-Content index.d.ts $_ }