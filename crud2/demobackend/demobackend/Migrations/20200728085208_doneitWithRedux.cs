using Microsoft.EntityFrameworkCore.Migrations;

namespace demobackend.Migrations
{
    public partial class doneitWithRedux : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Lastname",
                table: "TbPersonalDetails",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Lastname",
                table: "TbPersonalDetails");
        }
    }
}
